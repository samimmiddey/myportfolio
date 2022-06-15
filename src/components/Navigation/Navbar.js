import { Box, List, ListItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import PrimaryButton from '../UI/PrimaryButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const navigation = ['HOME', 'ABOUT', 'SKILLS', 'PORTFOLIO', 'CONTACT'];

const Navbar = () => {
   const [active, setActive] = useState(0);

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
               <a
                  href={`#${item.toLowerCase()}`}
                  key={index}
                  onClick={() => setActive(index)}
               >
                  <ListItem
                     sx={{
                        borderRadius: '5px'
                     }}
                  >
                     <Typography
                        sx={{
                           fontSize: '13px',
                           fontWeight: 600,
                           color: index === active ? '#784cfb' : 'text.secondary',
                           transition: '0.3s',
                           '&:hover': {
                              color: '#784cfb'
                           }
                        }}
                     >
                        {item}
                     </Typography>
                  </ListItem>
               </a>
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