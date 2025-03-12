import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    props.onEdit(props.id, { title: editedTitle, content: editedContent });
    setIsEditing(false);
  }

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSave} style={{ margin: "5px" }}>
            <DoneIcon />
          </button>
        </>
      ) : (
        <>
          <h1
            onClick={() => props.onToggleChecked(props.id)}
            style={{
              textDecoration: props.isChecked ? "line-through" : "none",
              cursor: "pointer",
              color: props.isChecked ? "purple" : "black",
              transition: "0.3s ease",
            }}
          >
            {props.title}
          </h1>
          <p>{props.content}</p>
          <button onClick={handleEdit} style={{ margin: "5px" }}>
            <EditIcon />
          </button>
          <button onClick={handleDelete} style={{ margin: "5px" }}>
            <DeleteIcon />
          </button>
        </>
      )}
    </div>
  );
}

export default Note;
