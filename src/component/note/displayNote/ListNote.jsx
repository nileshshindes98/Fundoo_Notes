import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Typography, Box, Grid, Paper } from "@mui/material/";
import RemindMe from "../../cardComponent/RemindMe";
import Collaborate from "../../cardComponent/Collaborate";
import ColorPallete from "../../cardComponent/ColorPallete";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import Archive from "../../cardComponent/Archive";
import { Container } from "@mui/system";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

import { archiveNotes, deleteNotes } from "../../../services/DataService";
import { Pin } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';



const ListNote = ({ note, getNoteData }) => {
  const archiveNote = async () => {
    console.log(note.id);
    let data = { noteIdList: [note.id], isArchived: true };
    await archiveNotes(data);
    getNoteData();
  }

  const deleteNote = async () => {
    console.log(note.id);
    let data = { noteIdList: [note.id], isDeleted: true };
    await deleteNotes(data);
    getNoteData();
  }
  return (

    <Box sx={{ width: "73.4%" ,marginLeft:"12.2%",marginBottom:"2%"}}>
      <Paper style={{ border: "1px solid grey", padding: "2%" ,width:"auto", backgroundColor: note?.color ? note.color : '#fff'}}>
        <Grid className="Grid" sx={{ display: "flex", flexDirection: "column" }}>
          <Grid
            id="title"
            item
            sx={{ display: "flex", justifyContent: "space-between",padding:"1%"}}>
            <Typography>{note.title}</Typography>
            {/* {items.title} pass this value in this field  */}
            <PushPinOutlinedIcon sx={{ color: "grey" }} />
          </Grid>
          <Grid id="description" item sx={{padding:"1%"}}>
            <Typography>{note.title}</Typography>
          </Grid>
          <Grid item >
            <Typography sx={{ display:"flex",justifyContent:"flex-start"}}>
              <IconButton aria-label="Remainder">
                <RemindMe />
              </IconButton>

              <IconButton>
                <Collaborate />
              </IconButton>

              <IconButton>
                <ColorPallete
                getNoteData={getNoteData}
                />
              </IconButton>

              <IconButton>
                <InsertPhotoOutlinedIcon />
              </IconButton>

              <IconButton onClick={archiveNote}>
                <Archive />
              </IconButton>

              <IconButton onClick={deleteNote}>
                {/* <Delete/> */}
                <DeleteIcon />
              </IconButton>

            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>

  );
};

export default ListNote;
