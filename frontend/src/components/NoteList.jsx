import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const NoteList = ({ notes, onDelete, onEdit }) => {
  if (!Array.isArray(notes) || notes.length === 0) {
    return <p className="text-gray-500 text-center">No notes available.</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {notes.map((note) => (
        <div key={note._id} className="bg-purple-200 shadow-md rounded-lg p-4">
          <h3 className="text-lg text-center font-bold">{note.title}</h3>
          <p className="text-md text-center font-semibold text-gray-600 my-2">
            {note.description}
          </p>
          <p className="text-md text-center font-semibold text-gray-500">
            {note.category}
          </p>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => onEdit(note)}
              className="text-black text-3xl hover:underline"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => onDelete(note._id)}
              className="text-red-400 text-3xl hover:underline"
            >
              <RiDeleteBin6Fill />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
