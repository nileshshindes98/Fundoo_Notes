import React, { useState } from "react";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";

const EditNote = ({ onUpdate,editedNote }) => {
 

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
