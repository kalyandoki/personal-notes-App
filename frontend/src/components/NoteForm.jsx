import { useState, useEffect } from "react";

const NoteForm = ({ onSave, currentNote, resetCurrentNote }) => {
  const [note, setNote] = useState({
    title: "",
    description: "",
    category: "Others",
  });

  useEffect(() => {
    if (currentNote) setNote(currentNote);
  }, [currentNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(note);
    setNote({ title: "", description: "", category: "Others" });
    resetCurrentNote();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full"
      />
      <textarea
        name="description"
        value={note.description}
        onChange={handleChange}
        placeholder="Description"
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full"
      />
      <select
        name="category"
        value={note.category}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-4 py-2 w-full"
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        {currentNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;
