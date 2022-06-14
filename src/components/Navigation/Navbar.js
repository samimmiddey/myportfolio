import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import PrimaryButton from '../UI/PrimaryButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const navigation = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'];

const Navbar = () => {
   return (
      <Box
         sx={theme => ({
            display: 'flex',
            alignItems: 'center',
            columnGap: '3rem',
            [theme.breakpoints.down('xl')]: {
               columnGap: '2rem'
            },
            [theme.breakpoints.down('lg')]: {
               columnGap: '1.5rem'
            }
         })}
      >
         <List
            sx={theme => ({
               display: 'flex',
               alignItems: 'center',
               columnGap: '3rem',
               [theme.breakpoints.down('xl')]: {
                  columnGap: '2rem'
               },
               [theme.breakpoints.down('lg')]: {
                  columnGap: '1.5rem'
               }
            })}
         >
            {navigation.map((item, index) => (
               <ListItem
                  key={index}
                  sx={{
                     borderRadius: '5px'
                  }}
               >
                  <Typography
                     sx={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'text.secondary',
                        transition: '0.3s',
                        '&:hover': {
                           color: '#784cfb'
                        }
                     }}
                  >
                     {item}
                  </Typography>
               </ListItem>
            ))}
         </List>
         <DarkModeOutlinedIcon
            sx={{
               color: 'text.secondary',
               transition: '0.3s',
               '&:hover': {
                  color: '#784cfb'
               }
            }}
         />
         <PrimaryButton text='Hire Me' height='34px' />
      </Box>
   );
};

export default Navbar;