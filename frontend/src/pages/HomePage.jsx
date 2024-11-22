import React, { useState, useEffect } from "react";
import { getNotes, createNote, updateNote, deleteNote } from "../api";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchNotes();
  }, [search, category]);

  const fetchNotes = async () => {
    const { data } = await getNotes({ search, category });
    setNotes(data);
  };

  const handleSave = async (note) => {
    if (note._id) {
      await updateNote(note._id, note);
    } else {
      await createNote(note);
    }
    fetchNotes();
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    fetchNotes();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Personal Notes Manager</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />
      <NoteForm
        onSave={handleSave}
        currentNote={currentNote}
        resetCurrentNote={() => setCurrentNote(null)}
      />
      <NoteList notes={notes} onEdit={setCurrentNote} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
