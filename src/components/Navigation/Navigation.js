import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar';
import CustomizedDrawer from './Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { uiContext } from '../context/ui-context';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Navigation = () => {
   const [scrolled, setScrolled] = useState(false);
   const context = useContext(uiContext);

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   useEffect(() => {
      window.onscroll = function () {
         if (window.scrollY > 50) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };
   }, []);

   return (
      <Box
         sx={theme => ({
            position: 'fixed',
            height: '70px',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            boxShadow: `${scrolled ? '0px 2px 10px -2px rgba(0, 0, 0, 0.2)' : ''}`,
            zIndex: 99,
            [theme.breakpoints.down('sm')]: {
               height: '60px'
            }
         })}
      >
         <Box
            className='container'
            sx={{
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
               height: '100%',
               width: '100%'
            }}
         >
            <Typography
               variant='h6'
               sx={{
                  color: '#784cfb',
                  fontWeight: 700
               }}
            >
               SM
            </Typography>
            {
               !mdWidth &&
               <Navbar />
            }
            {
               mdWidth &&
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '2rem'
                  }}
               >
                  <DarkModeOutlinedIcon
                     sx={{
                        color: 'text.secondary',
                        transition: '0.3s',
                        '&:hover': {
                           color: '#784cfb'
                        }
                     }}
                  />
                  <IconButton
                     onClick={() => context.toggleDrawer()}
                     size='medium'
                     sx={{
                        "&:hover": { backgroundColor: "#ece6fe" }
                     }}
                  >
                     <MenuIcon
                        sx={{
                           color: '#text.secondary',
                           '&:hover': {
                              color: '#784cfb'
                           }
                        }}
                     />
                  </IconButton>
               </Box>
            }
         </Box>
         {
            mdWidth &&
            <CustomizedDrawer />
         }
      </Box>
   );
};

export default Navigation;