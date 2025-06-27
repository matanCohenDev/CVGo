import express from 'express';
import passport from 'passport';
import axios from 'axios';

const googleAuthWithPassport = passport.authenticate("google", {
  scope: ["profile", "email", "https://www.googleapis.com/auth/gmail.readonly"],
  prompt: "consent",
  accessType: "offline",
});

const googleAuthCallbackWithPassport = passport.authenticate("google", { failureRedirect: "/auth/fail" });

const getEmails = async (req: express.Request, res: express.Response) => {
  const { accessToken } = (req.user as any) ?? {};
  try {
    const { data } = await axios.get(
      "https://gmail.googleapis.com/gmail/v1/users/me/messages",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: { maxResults: 5 },
      }
    );
    const msgs = await Promise.all(
      data.messages.map((m: any) =>
        axios.get(
          `https://gmail.googleapis.com/gmail/v1/users/me/messages/${m.id}`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        )
      )
    );
    (req.session as any).emails = msgs.map((m: any) => {
      const h = m.data.payload.headers;
      const subject = h.find((x: any) => x.name === "Subject")?.value ?? "(אין נושא)";
      const from = h.find((x: any) => x.name === "From")?.value ?? "(לא ידוע)";
      return { id: m.data.id, snippet: m.data.snippet, subject, from };
    });
    res.redirect("http://localhost:5173");
  } catch {
    res.redirect("/auth/fail");
  }
};

const getEmailsHandler = (req: express.Request, res: express.Response) => {
  if (!req.isAuthenticated()) {
    res.status(401).end();
    return;
  }
  res.json((req.session as any).emails ?? []);
};

const authFailHandler = (req: express.Request, res: express.Response) => {
  res.send("התחברות נכשלה");
};

const authControllers = {
  googleAuthWithPassport,
  googleAuthCallbackWithPassport,
  getEmails,
  getEmailsHandler,
  authFailHandler,
};

export default authControllers;