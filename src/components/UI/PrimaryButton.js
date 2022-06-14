import { Button } from '@mui/material';
import React from 'react';

const PrimaryButton = ({ text, height, icon }) => {
   return (
      <Button
         className='primary-button'
         disableElevation
         variant='contained'
         sx={theme => ({
            display: 'flex',
            alignItems: 'center',
            transition: '0.5s',
            fontSize: '13px',
            minHeight: 0,
            height: `${height}`,
            "&:hover": {
               backgroundPosition: 'right center'
            },
            [theme.breakpoints.down('sm')]: {
               fontSize: '12px'
            }
         })}
      >
         {text}
         {icon}
      </Button>
   );
};

export default PrimaryButton;