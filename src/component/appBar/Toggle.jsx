import React from 'react'
import ViewStreamRoundedIcon from '@mui/icons-material/ViewStreamRounded';
import { IconButton } from '@mui/material';

const Toggle = ({toggleDisplay}) => {
  return (
    <div>
      <IconButton  size="large" color="black"onClick={toggleDisplay}>
        <ViewStreamRoundedIcon />
      </IconButton>
    </div>
  )
}

export default Toggle