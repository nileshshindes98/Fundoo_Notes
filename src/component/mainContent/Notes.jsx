import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import TakeNote from '../note/TakeNote';
import MakeNote from '../note/MakeNote';
import { getNotes } from '../../services/DataService';
import GridNote from '../note/displayNote/GridNote';
import ListNote from '../note/displayNote/ListNote';
import Headerr from '../../Pages/dashboard/DashBoard';



const Notes = ({ menudata, toggleView, displayView,firstNoteToggle,searchQuery }) => {
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
    if (menudata === 'Notes') {
      let newArray = arr.filter(item => item.isArchived === false && item.isDeleted === false)
      setNotes(newArray)
    } else if (menudata === 'Archive') {
      let newArray = arr.filter(item => item.isArchived === true)
      setNotes(newArray)
    } else if (menudata === 'Bin') {
      let newArray = arr.filter(item => item.isDeleted === true)
      setNotes(newArray)
    }
  };

  // useEffect(() => {
  //   getNoteData();
  // }, [menudata]);

  useEffect(()=>{
    if(searchQuery !==""){
     
      const searchResult = notes.filter(
        (item) =>
         item.title.toLowerCase().includes(searchQuery.toLowerCase()) 
      );
      // setNoteData
      setNotes(searchResult);
      // console.log(searchResult);
    }else {
      getNoteData();
    }
   
  },[searchQuery,menudata])


  const [toggle, settoggle] = useState(false);
  function handletoggle() {
    settoggle((prevState) => !prevState);
  }


  return (
    <>
    
    {/* <Headerr/> */}
    <DrawerHeader />

    

        <div style={{ marginBottom: "2%", left: 0 }}>
          {toggle ? (
            <div style={{display:"flex",justifyContent:"center"}} >
              <MakeNote getNoteData={getNoteData} handletoggle={handletoggle} settoggle={settoggle} />
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TakeNote handletoggle={handletoggle} />
            </div>
          )}
        </div>
     


      <div style={ displayView ?
        {
          
          display:"flex",
          flexDirection:"column",
          marginLeft: "25%",
          marginTop:"2%"
        } :
        {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          marginLeft: "1%",
        
        }}>
        {notes.map((note) => (
          <div key={note.id}
          >
            {toggleView ? (
              <div style={{ width: "auto" ,paddingLeft:"20px"}}>
                {/* id={note.id} title={note.title} description={note.description} */}
                <ListNote getNoteData={getNoteData} note={note} />

              </div>) :
              (
                <div>
                  <GridNote getNoteData={getNoteData} note={note} />

                </div>)}
          </div>
        ))}
      </div>

    </>
  )

}

export default Notes