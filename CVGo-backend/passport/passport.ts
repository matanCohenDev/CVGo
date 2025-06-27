import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

passport.serializeUser((u, d) => d(null, u));
passport.deserializeUser((o: any, d) => d(null, o));

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    (accessToken, _r, profile, done) => done(null, { profile, accessToken })
  )
);
