import React from 'react';
import { Box, TextField } from '@mui/material';
import PrimaryButton from '../UI/PrimaryButton';
import { useTheme, useMediaQuery } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const textfielLabel = ['Name', 'Email', 'Subject', 'Message'];

const ContactForm = () => {
   const theme = useTheme();
   const xlWidth = useMediaQuery(theme.breakpoints.down('xl'));
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   const height = xlWidth && !mdWidth ? '45px' : xlWidth && mdWidth ? '40px' : '50px';

   return (
      <Box>
         <form>
            <Box
               sx={theme => ({
                  marginBottom: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '1rem',
                  [theme.breakpoints.down('xl')]: {
                     marginBottom: '1.75rem',
                     rowGap: '1.75rem'
                  },
                  [theme.breakpoints.down('lg')]: {
                     marginBottom: '1.5rem',
                     rowGap: '1.5rem'
                  },
                  [theme.breakpoints.down('md')]: {
                     rowGap: '1.25rem',
                     marginBottom: '1.25rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                     rowGap: '1rem',
                     marginBottom: '1rem'
                  }
               })}
            >
               {textfielLabel.map((label, index) => (
                  <TextField
                     key={index}
                     required
                     multiline
                     rows={index === textfielLabel.length - 1 ? (lgWidth ? 4 : 5) : 1}
                     label={label}
                     variant="outlined"
                     sx={{
                        background: '#f8f6fe',
                        '& .MuiOutlinedInput-root': {
                           '& fieldset': {
                              borderColor: '#f8f6fe',
                              borderRadius: 0,
                           },
                           '&:hover fieldset': {
                              borderColor: '#f8f6fe',
                           },
                           '&.Mui-focused fieldset': {
                              borderColor: '#784cfb',
                           },
                        },
                     }}
                     InputLabelProps={{
                        style: {
                           color: 'rgba(120, 76, 251, 0.75)',
                           fontSize: mdWidth ? '14px' : '15px'
                        }
                     }}
                  />
               ))}
            </Box>
            <PrimaryButton
               text='Contact Me'
               height={height}
               icon={<SendIcon sx={{ marginLeft: '10px', fontSize: '1.3rem' }} />}
            />
         </form>
      </Box>
   );
};

export default ContactForm;