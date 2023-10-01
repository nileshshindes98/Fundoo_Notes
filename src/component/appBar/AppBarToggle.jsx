import React from 'react'
import ViewStreamRoundedIcon from '@mui/icons-material/ViewStreamRounded';
import { IconButton } from '@mui/material';

const AppBarToggle  = ({toggleDisplay }) => {
  return (
    <div>
      <IconButton size="large" color="black" onClick={toggleDisplay}>
        <ViewStreamRoundedIcon />
      </IconButton>
    </div>
  )
}

export default AppBarToggle 