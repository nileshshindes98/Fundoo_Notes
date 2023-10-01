import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Typography, Box, Grid, Paper } from "@mui/material/";
import RemindMe from "../../cardComponent/RemindMe";
import Collaborate from "../../cardComponent/Collaborate";
import ColorPallete from "../../cardComponent/ColorPallete";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import Archive from "../../cardComponent/Archive";

import Delete from "../../cardComponent/Delete";
import Pin from "../../cardComponent/Pin";

const GridNote = ({ title, description }) => {
  //props item are pass here then

  return (
    <Box sx={{ width: 280 }}>
      <Paper style={{ border: "1px solid grey", padding: "8px" }}>
        <Grid sx={{ display: "flex", flexDirection: "column" }}>
          <Grid
            id="title"
            item
            sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>{title}</Typography>
            {/* {items.title} pass this value in this field  */}
            <Pin sx={{ color: "grey" }} />
          </Grid>
          <Grid id="description" item>
            <Typography>{description}</Typography>
          </Grid>
          <Grid item>
            <Typography>
              <IconButton aria-label="Remainder">
                <RemindMe />
              </IconButton>

              <IconButton>
                <Collaborate />
              </IconButton>

              <IconButton>
                <ColorPallete />
              </IconButton>

              <IconButton>
                <InsertPhotoOutlinedIcon />
              </IconButton>

              <IconButton>
                <Archive />
              </IconButton>

              <IconButton>
                <Delete />
              </IconButton>

            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default GridNote;
