import { useState, useEffect } from "react";
import Auth from "./components/Auth";
import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";

const ONE_MONTH = 30 * 24 * 60 * 60 * 1000;

function App() {
  const [user, setUser] = useState(null);
  const [entries, setEntries] = useState([]);
  const [editEntry, setEditEntry] = useState(null);

  // Load logged-in user
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (savedUser) setUser(savedUser);
  }, []);

  // Load user journals
  useEffect(() => {
    if (!user) return;

    const allData = JSON.parse(localStorage.getItem("journals")) || {};
    const userEntries = allData[user.email] || [];
    const now = Date.now();

    const validEntries = userEntries.filter(
      e => now - e.createdAt <= ONE_MONTH
    );

    setEntries(validEntries);

    allData[user.email] = validEntries;
    localStorage.setItem("journals", JSON.stringify(allData));
  }, [user]);

  // Save journals
  useEffect(() => {
    if (!user) return;

    const allData = JSON.parse(localStorage.getItem("journals")) || {};
    allData[user.email] = entries;
    localStorage.setItem("journals", JSON.stringify(allData));
  }, [entries, user]);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setEntries([]);
  };

  if (!user) {
    return <Auth setUser={setUser} />;
  }

  return (
    <div className="container">
      <h1>📔 Professional Journal</h1>
      <p>Logged in as: {user.email}</p>
      <button onClick={logout}>Logout</button>

      <JournalForm
        addEntry={entry => setEntries([entry, ...entries])}
        editEntry={editEntry}
        updateEntry={updated =>
          setEntries(entries.map(e => (e.id === updated.id ? updated : e)))
        }
      />

      <JournalList
        entries={entries}
        deleteEntry={id =>
          setEntries(entries.filter(e => e.id !== id))
        }
        setEditEntry={setEditEntry}
      />
    </div>
  );
}

export default App;
