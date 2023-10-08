import React, { useState } from "react";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";

const EditNote = ({ note, onUpdate }) => {
  const [editedNote, setEditedNote] = useState(note);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedNote({
      ...editedNote,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    onUpdate(editedNote);
  };

  return (
    <div>
      <EditNoteOutlinedIcon onClick={handleUpdate} />
    </div>
  );
};

export default EditNote;
