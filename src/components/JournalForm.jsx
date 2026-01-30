import { useState, useEffect } from "react";

function JournalForm({ addEntry, editEntry, updateEntry }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editEntry) {
      setTitle(editEntry.title);
      setContent(editEntry.content);
    }
  }, [editEntry]);

  const submit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    if (editEntry) {
      updateEntry({ ...editEntry, title, content });
    } else {
      addEntry({
        id: Date.now(),
        title,
        content,
        date: new Date().toLocaleDateString(),
        createdAt: Date.now()
      });
    }

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={submit} className="form">
      <input
        value={title}
        placeholder="Journal Title"
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        value={content}
        placeholder="Write your thoughts..."
        onChange={e => setContent(e.target.value)}
      />

      <button>{editEntry ? "Update & Save" : "Save Journal"}</button>
    </form>
  );
}

export default JournalForm;
