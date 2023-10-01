import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import TakeNote from '../note/TakeNote';
import MakeNote from '../note/MakeNote';
import { getNotes } from '../../services/DataService';
import GridNote from '../note/displayNote/GridNote';
import ListNote from '../note/displayNote/ListNote';
import Toggle from '../appBar/Toggle';

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

      <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
      <Grid sx={{display:"flex", flexDirection:"column"}}>
          <Grid item xs={6}>
            {toggle ? (
              <MakeNote
                getNoteData={getNoteData}
                handletoggle={handletoggle}
              />
            ) : (
              <TakeNote handletoggle={handletoggle} />
            )}
          </Grid>
          </Grid>


          <Grid item xs={12} sx={{}}>
            <div className="display"> 
            {notes.map((note) =>
              display ? (
                <ListNote 
                  key={note.id}
                  title={note.title}
                  description={note.description}
                  display={display}
                />
              ) : (
                <GridNote
                  key={note.id}
                  title={note.title}
                  description={note.description}
                  display={display}
                />
              )
            )}
            </div>
          </Grid>

        </Box>  
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
        sapien faucibus et molestie ac.
      </Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
        eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
        neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
        sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
        tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
        et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
        tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
        posuere sollicitudin aliquam ultrices sagittis orci a.
      </Typography>

      
    </>
  )
  
}

export default Notes