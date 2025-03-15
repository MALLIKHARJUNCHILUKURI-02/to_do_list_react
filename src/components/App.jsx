import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // State to manage the list of notes, initialized from localStorage if available
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Effect hook to update localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Function to add a new note
  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, { ...newNote, isChecked: false }]);
  }

  // Function to delete a note by filtering it out of the notes array
  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((_, index) => index !== id));
  }

  // Function to edit an existing note by updating its title and content
  function editNote(id, updatedNote) {
    setNotes(prevNotes =>
      prevNotes.map((note, index) => (index === id ? { ...note, ...updatedNote } : note))
    );
  }

  // Function to toggle the checked state of a note (used for strikethrough effect)
  function toggleChecked(id) {
    setNotes(prevNotes =>
      prevNotes.map((note, index) =>
        index === id ? { ...note, isChecked: !note.isChecked } : note
      )
    );
  }

  return (
    <div className="main-content">
      <div className="Notesclass">
        {/* Header Component */}
        <Header />
        
        {/* CreateArea Component for adding new notes */}
        <CreateArea onAdd={addNote} />

        {/* Rendering each note dynamically */}
        {notes.map((noteItem, index) => (
          <Note
            key={index} // Unique key for each note
            id={index} // Note ID passed for identification
            title={noteItem.title} // Note title
            content={noteItem.content} // Note content
            isChecked={noteItem.isChecked} // Checked state for strikethrough effect
            onDelete={deleteNote} // Delete function
            onEdit={editNote} // Edit function
            onToggleChecked={toggleChecked} // Function to toggle checked state
          />
        ))}
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
