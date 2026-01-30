function JournalItem({ entry, deleteEntry, setEditEntry }) {
  return (
    <div className="entry">
      <h3>{entry.title}</h3>
      <small>{entry.date}</small>
      <p>{entry.content}</p>

      <button onClick={() => setEditEntry(entry)}>Edit</button>
      <button onClick={() => deleteEntry(entry.id)}>Delete</button>
    </div>
  );
}

export default JournalItem;
