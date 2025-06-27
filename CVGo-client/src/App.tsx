import LP from "./pages/LP/LP";

export default function App() {
  return (
    <div className="App">
      <LP />
    </div>
  );
}

// // src/App.tsx
// import { useEffect, useState } from "react";
// import "./App.css";

// type Email = {
//   id: string;
//   subject: string;
//   from: string;
//   snippet: string;
// };

// function App() {
//   const [emails, setEmails] = useState<Email[] | null>(null);
//   const [loading, setLoading] = useState(false);

//   const login = () => {
//     window.location.href = "http://localhost:4000/auth/google";
//   };

//   useEffect(() => {
//     const load = async () => {
//       setLoading(true);
//       try {
//         const r = await fetch("http://localhost:4000/auth/emails", {
//           credentials: "include",
//         });
//         if (!r.ok) throw new Error();
//         const data: Email[] = await r.json();
//         setEmails(data);
//       } catch {
//         setEmails(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, []);

//   if (loading) return <p style={{ textAlign: "center" }}>טוען…</p>;

//   if (!emails)
//     return (
//       <div className="App">
//         <button className="loginBtn" onClick={login}>
//           התחברות עם Google
//         </button>
//       </div>
//     );

//   return (
//     <div className="App">
//       <h2>5 ההודעות האחרונות בג׳ימייל</h2>
//       <ul className="mailList">
//         {emails.map((m) => (
//           <li key={m.id} className="mailItem">
//             <strong>{m.subject}</strong>
//             <div className="from">{m.from}</div>
//             <p className="snippet">{m.snippet}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
