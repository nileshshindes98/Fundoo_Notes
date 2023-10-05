import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material/";
import RemindMe from "../cardComponent/RemindMe";
import IconButton from "@mui/material/IconButton";
import ColorPallete from "../cardComponent/ColorPallete";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

import Collaborate from "../cardComponent/Collaborate";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
// import Delete from "../cardComponent/delete";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Input from "@mui/material/Input";
import { addNote } from "../../services/DataService";

const styles = {
    input: {
        "&::before": {
            borderBottom: "none !important", // Remove underline when not focused
        },
        "&::after": {
            borderBottom: "none !important", // Remove underline when focused
        },
        "&:hover::before": {
            borderBottom: "none !important", // Remove underline on hover
        },
    },
};

const MakeNote = ({ getNoteData, settoggle }) => {
    //Create a new state variable in Takenote2 to store the note data.
    const [noteData, setNoteData] = useState({
        description: "",
        title: "",
        isArchived: false,
        color :""
    });

    // Create a new function called submitNote to post the note data to the API.
    const submitNote = async () => {
        if (!noteData.title || !noteData.description) {
            return settoggle(false);
        }
        let response = await addNote(noteData);
        console.log(response);

        getNoteData();
        settoggle(false);
    };

    const handleArchive = () => {
        setNoteData({
            ...noteData,
            isArchived: true,
        });
    };

    const handleColorSelect = (color) => {
        // Update the selected color in the state
        setNoteData({
          ...noteData,
          color: color,
        });
      };

    //Update the handleChange function to update the noteData state variable.
    const handleChange = (event) => {
        setNoteData({ ...noteData, [event.target.id]: event.target.value });
    };

    return (
        <Box
            sx={{
                border: "none",
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    // m: 0,
                },
            }}
        >
            <Paper elevation={6} sx={{ width: "48vw", borderRadius: 2 ,backgroundColor: noteData?.color ? noteData.color : '#fff'}}>
                <Card variant="outlined" sx={{ padding: 1, width: "auto",backgroundColor:"transparent"}}>
                    <Box sx={{ height: "auto" }}>
                        {/* First Row */}
                        <Input
                            placeholder="Title"
                            id="title"
                            value={noteData.title}
                            fullWidth
                            onChange={handleChange}
                            sx={{
                                "& > :not(style)": { m: 1 },
                                ...styles.input,

                                color: "Black",

                            }}
                        />

                        {/* Second Row */}
                        <TextField
                            id="description"
                            placeholder="Take a note.."
                            fullWidth
                            multiline
                            rows={1}
                            defaultValue="Default Value"
                            value={noteData.description}
                            onChange={handleChange}
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                                sx: {
                                    "& > :not(style)": { m: 1 },
                                    ...styles.input,
                                    "&::placeholder": {
                                        fontWeight: "bold",
                                    },
                                    minHeight: "auto", // This line dynamically adjusts the height
                                },
                            }}
                        />
                        {/* Third Row */}
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex" }}>
                                <IconButton
                                    aria-label="Remainder"
                                    sx={{ padding: "0px 18px 0px 18px" }}
                                >
                                    <RemindMe />
                                </IconButton>

                                <IconButton sx={{ padding: "0px 18px 0px 18px" }}>
                                    <Collaborate />
                                </IconButton>

                                <IconButton sx={{ padding: "0px 18px 0px 18px" }}>
                                    <ColorPallete  
                                     action={"create"}
                                    setNoteData={setNoteData}
                                    getNoteData={getNoteData}
                                    onColorSelect={handleColorSelect}/>
                                </IconButton>

                                <IconButton sx={{ padding: "0px 18px 0px 18px" }}>
                                    <InsertPhotoOutlinedIcon />
                                </IconButton>

                                <IconButton
                                    onClick={handleArchive}
                                    sx={{ padding: "0px 18px 0px 18px" }}
                                >
                                    <ArchiveOutlinedIcon />
                                </IconButton>

                                <IconButton sx={{ padding: "0px 18px 0px 18px" }}>
                                    {/* <Delete /> */}
                                </IconButton>
                            </Box>

                            <Button sx={{
                                "&:hover": {
                                    backgroundColor: "#f1f3f4",
                                }, color: "black"
                            }} onClick={submitNote}>
                                Close
                            </Button>
                        </Box>
                    </Box>
                </Card>
            </Paper>
        </Box>
    );
};

export default MakeNote;
