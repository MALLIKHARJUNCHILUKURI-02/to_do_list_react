import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add'; // Importing the Add (+) icon from Material UI
import Fab from '@mui/material/Fab'; // Floating Action Button component from Material UI
import Zoom from '@mui/material/Zoom'; // Zoom animation effect from Material UI

function CreateArea(props) {
  
  // State to track whether the input area is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // State to store the note's title and content
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // Function to handle input changes and update state
  function handleChange(event) {
    const { name, value } = event.target; // Destructuring name and value from the input field

    setNote(prevNote => {
      return {
        ...prevNote, // Keep previous values
        [name]: value // Update the specific field (title or content)
      };
    });
  }

  // Function to submit the note and clear the input fields
  function submitNote(event) {
    props.onAdd(note); // Call the onAdd function from props to add the note
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault(); // Prevent page reload on form submission
  }

  // Function to expand the input area when clicked
  function expanded() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {/* Show title input only when the form is expanded */}
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        {/* Textarea for note content */}
        <textarea
          onClick={expanded} // Expand the form when textarea is clicked
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1} // Expand rows when clicked
        />

        {/* Floating Action Button for adding a new note, shown only when expanded */}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
