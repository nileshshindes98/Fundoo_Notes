import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import TakeNote from '../note/TakeNote';
import MakeNote from '../note/MakeNote';
import { getNotes } from '../../services/DataService';
import GridNote from '../note/displayNote/GridNote';
import ListNote from '../note/displayNote/ListNote';


const Notes = ({menudata,toggleView}) => {
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
    // let res = await getNotes();
    // setNotes(res.data.data.data);
    // console.log(res.data.data.data);
    let response = await getNotes();
    // console.log(response.data.data.data)
    let arr = response.data.data.data
    if(menudata === 'Notes') {
      let newArray = arr.filter(item => item.isArchived === false && item.isDeleted === false)
      setNotes(newArray)
    } else if (menudata === 'Archive') {
      let newArray = arr.filter(item => item.isArchived === true )
      setNotes(newArray)
    } else if(menudata === 'Bin') {
      let newArray = arr.filter(item => item.isDeleted === true)
      setNotes(newArray)
    }
  };

  useEffect(() => {
    getNoteData();
  }, [menudata]);


  const [toggle, settoggle] = useState(false);
  function handletoggle() {
    settoggle((prevState) => !prevState);
  }

   //toggle grid ,list
  //  const [display, setdisplay] = useState(false);


  return (
    <>
      <DrawerHeader/>

      <Box sx={{ display: 'flex',justifyContent:"center",/*border:"1px solid black"*/}}>
        
        <div container spacing={2}>
          <div>
            {toggle ? (
              <Box sx={{display:"flex" ,justifyContent:'center'}}> 
              <MakeNote getNoteData={getNoteData} handletoggle={handletoggle} settoggle={settoggle} />
              </Box>
            ) : (
              <Box sx={{display:"flex" ,justifyContent:'center'}}> 

              <TakeNote handletoggle={handletoggle} />
              </Box>
            )}
          </div>
          <div style={{/*border:"2px solid green"*/}}>
          {notes.map((note) => (
            <div key={note.id}>
              {toggleView ? (
                <div style={{width:"100%"}}>
                <ListNote title={note.title} description={note.description} />
                </div>) : 
              ( 
            <div>

                <GridNote getNoteData={getNoteData} id={note.id} title={note.title} description={note.description} />
             </div> )}
            </div>
          ))}
          </div>
        </div>
      </Box>  
    </>
  )
  
}

export default Notes