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
      className="shadow-black bg-green-100 text-black  p-8 shadow-md rounded-lg  mt-4"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 bg-gray-200 p-2 border rounded-md"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-2 p-2 border bg-gray-200 rounded-md"
        rows="4"
        required
      ></textarea>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-2 p-2 border bg-gray-200 rounded-md"
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
      <div className="w-1/4">
        <button
          type="submit"
          className="w-full bg-blue-400 text-black py-2 rounded-md"
        >
          {editingNote ? "Update Note" : "Add Note"}
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
