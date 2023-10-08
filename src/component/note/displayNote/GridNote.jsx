import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNote from "../../cardComponent/EditNote";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { Box, Grid, Paper, Typography } from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";

import {
  archiveNotes,
  changeColor,
  deleteNotes,
  deleteNotesForever,
  updateNote,
} from "../../../services/DataService";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

import Collaborate from "../../cardComponent/Collaborate";
import ColorPallete from "../../cardComponent/ColorPallete";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";

import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";

const GridNote = ({ note, getNoteData, setNoteData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: note.title,
    description: note.description,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateNote = async () => {
    let data = {
      noteId:note.id,
      title:editedNote.title , 
      description:editedNote.description,
      // noteIdList: [note.id],
      // updatedData: editedNote,
    };
    
    try {
      const response = await updateNote(data);
      if (response.status === 200) {
        getNoteData();
        setIsEditing(false);
      } else {
        console.error("Error updating note:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const archiveNote = async () => {
    console.log(note.id);
    let data = { noteIdList: [note.id], isArchived: true };
    await archiveNotes(data);
    getNoteData();
  };

  const unarchiveNote = async () => {
    console.log(note.id);
    let data = { noteIdList: [note.id], isArchived: false };
    await archiveNotes(data);
    getNoteData();
  };

  const deleteNote = async () => {
    console.log(note.id);
    let data = { noteIdList: [note.id], isDeleted: true };
    await deleteNotes(data);
    getNoteData();
  };

  const restoreDeletedNote = async () => {
    console.log(note.id);
    let data = { noteIdList: [note.id], isDeleted: false };
    await deleteNotes(data);
    getNoteData();
  };

  const deleteNoteForever = async () => {
    console.log(note.id);
    let data = { noteIdList: [note.id], isDeleted: true };
    await deleteNotesForever(data);
    getNoteData();
  };

  const styles = {
    paperContainer: {
      border: "1px solid grey",
      padding: "8px",
      backgroundColor: note?.color ? note.color : "#fff",
      position: "relative",
    },
    modalContainer: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backdropFilter: isEditing ? "blur(5px)" : "none", // Apply blur only when editing
      zIndex: 999, // Ensure it's above other content
    },
    modal: {
      width: "80%",
      maxWidth: "400px",
      backgroundColor: "#fff",
      border: "1px solid #e0e0e0",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    inputField: {
      width: "100%",
      padding: "8px",
      marginBottom: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    textArea: {
      width: "100%",
      padding: "8px",
      marginBottom: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",
      minHeight: "100px", // Adjust as needed
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "10px",
    },
    saveButton: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    cancelButton: {
      backgroundColor: "#f44336",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  return (
    <Box sx={{ width: "auto", m: 1 }}>
      {/* Modal container for blur effect */}
      {isEditing && <div style={styles.modalContainer}></div>}

      <Paper style={styles.paperContainer}>
        <Grid>
          <Grid id="title" item>
            <Typography>{note.title}</Typography>
          </Grid>
          <Grid id="description" item>
            <Typography>{note.description}</Typography>
          </Grid>
          <Typography
            sx={{
              minWidth: "240px",
            }}
          >
            {!note.isDeleted ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <IconButton aria-label="Remainder">
                  <AddAlertOutlinedIcon />
                </IconButton>

                <IconButton sx={{ padding: 0 }}>
                  <ColorPallete
                    noteId={note.id}
                    action={"edit"}
                    getNoteData={getNoteData}
                    setNoteData={setNoteData}
                    onClick={changeColor}
                  />
                </IconButton>

                <IconButton>
                  <Collaborate />
                </IconButton>

                <IconButton>
                  <EditNote note={note} onUpdate={handleEditClick} />
                </IconButton>

                {!note.isArchived ? (
                  <IconButton onClick={archiveNote}>
                    <ArchiveOutlinedIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={unarchiveNote}>
                    <UnarchiveOutlinedIcon />
                  </IconButton>
                )}

                <IconButton onClick={deleteNote}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ) : (
              <div style={{ display: "flex", justifyContent: "end" }}>
                <IconButton onClick={deleteNoteForever}>
                  <DeleteForeverIcon />
                </IconButton>

                {!note.isArchived ? (
                  <IconButton onClick={restoreDeletedNote}>
                    <RestoreFromTrashIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={deleteNote}>
                    <DeleteIcon />
                  </IconButton>
                )}
              </div>
            )}
          </Typography>
        </Grid>
      </Paper>

      {isEditing && (
        <div style={styles.modalContainer}>
          <div style={styles.modal}>
            <input
              type="text"
              name="title"
              value={editedNote.title}
              onChange={(e) =>
                setEditedNote({ ...editedNote, title: e.target.value })
              }
              placeholder="Title"
              style={styles.inputField}
            />
            <textarea
              name="description"
              value={editedNote.description}
              onChange={(e) =>
                setEditedNote({ ...editedNote, description: e.target.value })
              }
              placeholder="Description"
              style={styles.textArea}
            />
            <div style={styles.buttonContainer}>
              <button onClick={handleUpdateNote} style={styles.saveButton}>
                Save
              </button>
              <button onClick={handleCancelEdit} style={styles.cancelButton}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
};

export default GridNote;
