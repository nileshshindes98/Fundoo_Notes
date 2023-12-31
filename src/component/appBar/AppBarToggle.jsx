import React from 'react'
import ViewStreamRoundedIcon from '@mui/icons-material/ViewStreamRounded';
import { IconButton } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

const AppBarToggle  = ({handleToggle,toggle,listViewHandle}) => {
  return (
    <div>
      <IconButton sx={{padding:"0px"}} size="large" color="black"  onClick={() => { handleToggle(); listViewHandle(); }} >
        {toggle ? 
          <GridViewOutlinedIcon /> :  <ViewStreamRoundedIcon />
        }
      </IconButton>
    </div>
  )
}

export default AppBarToggle 