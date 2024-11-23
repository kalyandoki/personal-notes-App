import { useEffect, useState } from "react";
import NoteList from "../components/NoteList";
import NoteForm from "../components/NoteForm";
import SearchBar from "../components/SearchBar";
import { fetchNotes, createNote, deleteNote, updateNote } from "../api";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const loadNotes = async (query = {}) => {
    const data = await fetchNotes(query);
    setNotes(data);
  };

  const handleSave = async (note) => {
    if (editingNote) {
      await updateNote(editingNote._id, note);
      setEditingNote(null);
    } else {
      await createNote(note);
    }
    loadNotes();
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    loadNotes();
  };

  const handleEdit = (note) => {
    setEditingNote(note);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="bg-red-300 text-center rounded-2xl border p-2 shadow-black text-2xl font-bold mb-10">
        Personal Notes Manager
      </h1>
      <SearchBar onSearch={loadNotes} />
      <NoteForm onSave={handleSave} editingNote={editingNote} />
      <NoteList notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default HomePage;
