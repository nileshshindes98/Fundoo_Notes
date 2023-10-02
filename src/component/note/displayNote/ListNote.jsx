import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Typography, Box, Grid, Paper } from "@mui/material/";
import RemindMe from "../../cardComponent/RemindMe";
import Collaborate from "../../cardComponent/Collaborate";
import ColorPallete from "../../cardComponent/ColorPallete";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import Archive from "../../cardComponent/Archive";
import { Container } from "@mui/system";
import Delete from "@mui/icons-material/Delete";
import { archiveNotes,deleteNotes } from "../../../services/DataService";


const ListNote = ({  id,title, description,getNoteData }) => {
  const archiveNote = async() => {
    console.log(id);
    let data = {noteIdList: [id],isArchived:true};
    await archiveNotes(data);
    getNoteData();
  }

  const deleteNote = async() => {
    console.log(id);
    let data = {noteIdList: [id],isDeleted:true};
    await deleteNotes(data);
    getNoteData();
  }
  return (
    
      <Box sx={{ width: "auto", m: 1 }}>
        <Paper style={{ border: "1px solid grey", padding: "8px" }}>
          <Grid>
            <Grid id="title"
            item>
              <Typography>{title}</Typography>
            </Grid>
            <Grid id="description" item>
              <Typography>{description}</Typography>
            </Grid>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <Typography sx={{display:"flex",justifyContent:"space-between"}}>
                <IconButton aria-label="Remainder">
                  <RemindMe />
                </IconButton>

                <IconButton>
                  <ColorPallete />
                </IconButton>

                <IconButton>
                  <Collaborate />
                </IconButton>

                <IconButton>
                  <InsertPhotoOutlinedIcon/>
                </IconButton>

                <IconButton onClick={archiveNote}>
                  <Archive />
                </IconButton>

                <IconButton onClick={deleteNote}><Delete/>
                </IconButton>
              </Typography>
            </div>
          </Grid>
        </Paper>
      </Box>
 
  );
};

export default ListNote;
