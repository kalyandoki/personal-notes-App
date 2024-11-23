const NoteList = ({ notes, onDelete, onEdit }) => {
  if (!Array.isArray(notes) || notes.length === 0) {
    return <p className="text-gray-500 text-center">No notes available.</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {notes.map((note) => (
        <div key={note._id} className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold">{note.title}</h3>
          <p className="text-sm text-gray-600 my-2">{note.description}</p>
          <p className="text-xs text-gray-500">{note.category}</p>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => onEdit(note)}
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(note._id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
