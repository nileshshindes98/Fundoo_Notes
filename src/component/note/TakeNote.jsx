import {  IconButton, InputAdornment, Paper, TextField } from '@mui/material'
import React from 'react'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

const TakeNote = ({handletoggle}) => {
    return (
        <div onClick={handletoggle}>
            <Paper elevation={6} sx={{ display: "flex", border: "none", borderRadius: 2, height: 45, alignItems: "center", padding: "10px", width: "48vw" }}>
                <TextField
                    id="TakeNote" variant="standard" placeholder='Take a note...' style={{ width: "95%", outline: 'none'}}
                    InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <CheckBoxOutlinedIcon />
                                </IconButton>

                                <IconButton>
                                    <BrushRoundedIcon />
                                </IconButton>

                                <IconButton>
                                    <InsertPhotoOutlinedIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Paper>
        </div>
    )
}

export default TakeNote