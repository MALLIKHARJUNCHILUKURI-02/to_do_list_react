import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, { ...newNote, isChecked: false }]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((_, index) => index !== id));
  }

  function editNote(id, updatedNote) {
    setNotes(prevNotes =>
      prevNotes.map((note, index) => (index === id ? { ...note, ...updatedNote } : note))
    );
  }

  function toggleChecked(id) {
    setNotes(prevNotes =>
      prevNotes.map((note, index) =>
        index === id ? { ...note, isChecked: !note.isChecked } : note
      )
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          isChecked={noteItem.isChecked}
          onDelete={deleteNote}
          onEdit={editNote}
          onToggleChecked={toggleChecked}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
