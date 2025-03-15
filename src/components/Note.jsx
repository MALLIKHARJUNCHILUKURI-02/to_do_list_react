import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

function Note(props) {
  // State to manage whether the note is in edit mode
  const [isEditing, setIsEditing] = useState(false);
  
  // State variables to store the edited title and content of the note
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);

  // Function to handle deleting a note by calling the onDelete function from props
  function handleDelete() {
    props.onDelete(props.id);
  }

  // Function to enable edit mode when the edit button is clicked
  function handleEdit() {
    setIsEditing(true);
  }

  // Function to save the edited note, update the state, and exit edit mode
  function handleSave() {
    props.onEdit(props.id, { title: editedTitle, content: editedContent });
    setIsEditing(false);
  }

  return (
    <div className="note">
      {isEditing ? (
        // Render editable fields when in edit mode
        <>
          {/* Input field for editing the note title */}
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          {/* Textarea for editing the note content */}
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          {/* Button to save the changes and exit edit mode */}
          <button onClick={handleSave} style={{ margin: "5px" }}>
            <DoneIcon />
          </button>
        </>
      ) : (
        // Render the note normally when not in edit mode
        <>
          {/* Display note title with an option to toggle checked state */}
          <h1
            onClick={() => props.onToggleChecked(props.id)}
            style={{
              textDecoration: props.isChecked ? "line-through" : "none", // Apply strikethrough if checked
              cursor: "pointer",
              color: props.isChecked ? "purple" : "black", // Change color if checked
              transition: "0.3s ease", // Smooth transition effect
            }}
          >
            {props.title}
          </h1>
          {/* Display note content */}
          <p>{props.content}</p>
          {/* Button to enable edit mode */}
          <button onClick={handleEdit} style={{ margin: "5px" }}>
            <EditIcon />
          </button>
          {/* Button to delete the note */}
          <button onClick={handleDelete} style={{ margin: "5px" }}>
            <DeleteIcon />
          </button>
        </>
      )}
    </div>
  );
}

export default Note;
