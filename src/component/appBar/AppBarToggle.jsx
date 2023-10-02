import React from 'react'
import ViewStreamRoundedIcon from '@mui/icons-material/ViewStreamRounded';
import { IconButton } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

const AppBarToggle  = ({handleToggle,toggle}) => {
  return (
    <div>
      <IconButton size="large" color="black" onClick={handleToggle}>
        {toggle ? 
          <GridViewOutlinedIcon /> :  <ViewStreamRoundedIcon />
        }
      </IconButton>
    </div>
  )
}

export default AppBarToggle 