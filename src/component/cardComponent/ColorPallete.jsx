import React from 'react'
// import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { Box, CardActions } from '@mui/material';
import { changeColor } from '../../services/DataService';


export default function ColorPallete({ id, onColorSelect, action, noteId, setNoteData, getNoteData }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();


    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    const colors = ["#2ECC71", "#AF7AC5", "#ffffff", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"];
    const handleColorSelect = async (color) => {
        if (action === "create") {
            setNoteData((prevState) => ({ ...prevState, color: color }))
            setOpen(false);
            onColorSelect(color);
        } else if (action === "edit") {
            let noteData = { noteIdList: [noteId], color: color }
            let response = await changeColor(noteData);
            if (response.status === 200) {
                getNoteData();
            }
            // changeColor();
            setOpen(false);
            console.log(response);
            // setNotes((prevState)=>({...prevState, color:color}))
        }
        // Call the parent component's callback function with the selected color
        // onColorSelect(color);
    };

    return (
        <React.Fragment>
            <Box>

                <Popper id={id} open={open} anchorEl={anchorEl} placement={placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper sx={{ borderRadius: '10px' }}>
                                <Typography sx={{ p: 2 }} component={'span'}>
                                    <Box sx={{ p: 1, bgcolor: 'background.paper', display: "flex", alignItems: "center", height: 25 }}>
                                        {
                                            colors.map((color, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleColorSelect(color)}
                                                    style={{
                                                        backgroundColor: color,
                                                        height: 25,
                                                        width: 25,
                                                        margin: 2,
                                                        borderRadius: 50
                                                    }}
                                                ></div>
                                            ))
                                        }
                                    </Box>
                                </Typography>
                            </Paper>
                        </Fade>
                    )}
                </Popper>

                <Button sx={{ minWidth: "10px" }} onClick={handleClick('bottom-start')}>
                    <PaletteOutlinedIcon sx={{ color:"rgba(0, 0, 0, 0.54)"}} />
                </Button>



            </Box>

        </React.Fragment>


    )
}




