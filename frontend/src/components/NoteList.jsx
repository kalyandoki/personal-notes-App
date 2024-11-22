import { FaEdit, FaTrash } from "react-icons/fa";

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {notes.map((note) => (
        <div
          key={note._id}
          className="border border-gray-300 rounded-md p-4 shadow-md"
        >
          <h3 className="text-lg font-semibold">{note.title}</h3>
          <p className="text-sm text-gray-600">{note.description}</p>
          <p className="text-xs text-gray-500">Category: {note.category}</p>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => onEdit(note)}
              className="text-blue-500 hover:text-blue-600"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => onDelete(note._id)}
              className="text-red-500 hover:text-red-600"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
