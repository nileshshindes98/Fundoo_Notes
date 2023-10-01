import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import { Typography, Box, Grid, Paper } from "@mui/material/";
import RemindMe from "../../cardComponent/RemindMe";
import Collaborate from "../../cardComponent/Collaborate";
import ColorPallete from "../../cardComponent/ColorPallete";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import Archive from "../../cardComponent/Archive";



import { Container } from "@mui/system";

const ListNote = ( {title,description}) => {
  return (
    
      <Container maxWidth="sm">
        <Box sx={{ width:"130%" , m:1 }}>
          <Paper style={{ border: "1px solid grey", padding: "8px" }}>
            <Grid sx={{  }}>
              <Grid item>
                <Typography>{title}</Typography>
              </Grid>
              <Grid item>
                <Typography>{description}</Typography>
              </Grid>
              <Grid item>
                <Typography>
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
                    <InsertPhotoOutlinedIcon />
                  </IconButton>

                  <IconButton>
                    <Archive />
                  </IconButton>

                  <IconButton>
                    {/* <Delete /> */}
                  </IconButton>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>

  );
};

export default ListNote;
