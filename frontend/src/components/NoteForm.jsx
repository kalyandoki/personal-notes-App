import { useState } from "react";

const NoteForm = ({ onSave, editingNote }) => {
  const [title, setTitle] = useState(editingNote?.title || "");
  const [description, setDescription] = useState(
    editingNote?.description || ""
  );
  const [category, setCategory] = useState(editingNote?.category || "Others");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, category });
    setTitle("");
    setDescription("");
    setCategory("Others");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-4 mt-4"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 p-2 border rounded-md"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-2 p-2 border rounded-md"
        rows="4"
        required
      ></textarea>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-2 p-2 border rounded-md"
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md"
      >
        {editingNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;
