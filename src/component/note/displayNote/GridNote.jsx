import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNote from "../../cardComponent/EditNote";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { Box, Grid, Paper, Typography } from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import React from "react";
import {
  archiveNotes,
  changeColor,
  deleteNotes,
  deleteNotesForever,
  updateNote
} from "../../../services/DataService";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

import Collaborate from "../../cardComponent/Collaborate";
import ColorPallete from "../../cardComponent/ColorPallete";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";

import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";

const GridNote = ({ note, getNoteData, setNoteData }) => {
  //props item are pass here then
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

  const handleUpdateNote = async(editedNote) => {
    console.log(note.id);
    let data = { noteIdList: [note.id] };
    await updateNote(data);
    getNoteData();
    console.log("data retrieve", getNoteData);
  };
  return (
    <Box sx={{ width: "auto", m: 1 }}>
      <Paper
        style={{
          border: "1px solid grey",
          padding: "8px",
          backgroundColor: note?.color ? note.color : "#fff",
        }}
      >
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
                  <EditNote  note={note} onUpdate={handleUpdateNote}/>
                </IconButton>

                {!note.isArchived ? (
                  <IconButton onClick={archiveNote}>
                    <ArchiveOutlinedIcon />
                  </IconButton>
                ) : (
                  <>
                    <IconButton onClick={unarchiveNote}>
                      <UnarchiveOutlinedIcon />
                    </IconButton>
                  </>
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
    </Box>
  );
};

export default GridNote;
