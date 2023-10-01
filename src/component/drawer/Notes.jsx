import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import TakeNote from '../note/TakeNote';
import MakeNote from '../note/MakeNote';
import { getNotes } from '../../services/DataService';
import GridNote from '../note/displayNote/GridNote';
import ListNote from '../note/displayNote/ListNote';


const Notes = () => {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  //created useState for get note Api
  const [notes, setNotes] = useState([]);

  const getNoteData = async () => {
    let res = await getNotes();
    setNotes(res.data.data.data);
    console.log(res.data.data.data);
  };

  useEffect(() => {
    getNoteData();
  }, []);


  const [toggle, settoggle] = useState(false);
  function handletoggle() {
    settoggle((prevState) => !prevState);
  }

   //toggle grid ,list
   const [display, setdisplay] = useState(false);
   function toggleDisplay() {
     setdisplay((prevState) => !prevState);
   }


  return (
    <>

      <DrawerHeader />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {toggle ? (
              <MakeNote getNoteData={getNoteData} handletoggle={handletoggle} />
            ) : (
              <TakeNote handletoggle={handletoggle} />
            )}
          </Grid>
          {notes.map((note) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={note.id}>
              {display ? (
                <ListNote title={note.title} description={note.description} display={display} />
              ) : 
              (
                <GridNote title={note.title} description={note.description} display={display} />
              )}
            </Grid>
          ))}
        </Grid>
      </Box>  
    </>
  )
  
}

export default Notes