import JournalItem from "./JournalItem";

function JournalList({ entries, deleteEntry, setEditEntry }) {
  return (
    <div>
      {entries.map(entry => (
        <JournalItem
          key={entry.id}
          entry={entry}
          deleteEntry={deleteEntry}
          setEditEntry={setEditEntry}
        />
      ))}
    </div>
  );
}

export default JournalList;
