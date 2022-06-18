import React from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Box
         className='primary-background'
         sx={{
            color: '#fff'
         }}
      >
         <Box
            className='container'
            sx={theme => ({
               padding: '5rem 0',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               rowGap: '3rem',
               [theme.breakpoints.down('xl')]: {
                  rowGap: '2.5rem',
               },
               [theme.breakpoints.down('lg')]: {
                  rowGap: '2rem',
               },
               [theme.breakpoints.down('md')]: {
                  padding: '4rem 0'
               },
               [theme.breakpoints.down('sm')]: {
                  padding: '4rem 2rem',
                  textAlign: 'center'
               },
               [theme.breakpoints.down(350)]: {
                  padding: '3rem 0',
                  textAlign: 'center'
               }
            })}
         >
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '10px',
                  alignItems: 'center'
               }}
            >
               <Typography
                  variant='h6'
                  sx={theme => ({
                     fontWeight: 600,
                     fontSize: '2rem',
                     [theme.breakpoints.down('md')]: {
                        fontSize: '1.75rem'
                     },
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '1.5rem'
                     }
                  })}
               >
                  Samim Middey
               </Typography>
               <Typography
                  sx={{
                     textTransform: 'uppercase',
                     letterSpacing: '5px',
                     fontWeight: 300,
                     fontSize: '13px'
                  }}
               >
                  {!smWidth && 'Web Designer |'} Front End Developer
               </Typography>
            </Box>
            <Box
               sx={theme => ({
                  display: 'flex',
                  alignItems: 'flex-start',
                  columnGap: '5rem',
                  [theme.breakpoints.down('lg')]: {
                     columnGap: '4rem'
                  },
                  [theme.breakpoints.down('md')]: {
                     columnGap: '3.5rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                     columnGap: 0,
                     flexDirection: 'column',
                     alignItems: 'center',
                     justifyContent: 'center',
                     rowGap: '2rem'
                  }
               })}
            >
               {['home', 'about', 'skills', 'portfolio', 'contact'].map((item, index) => (
                  <a
                     href={`#${item.toLowerCase()}`}
                     key={index}
                  >
                     <Typography
                        sx={theme => ({
                           fontSize: '14px',
                           fontWeight: 500,
                           color: '#fff',
                           textTransform: 'uppercase',
                           transition: '0.3s',
                           '&:hover': {
                              color: '#f8f6fe'
                           },
                           [theme.breakpoints.down('md')]: {
                              fontSize: '13px'
                           }
                        })}
                     >
                        {item}
                     </Typography>
                  </a>
               ))}
            </Box>
            <Box
               sx={theme => ({
                  display: 'flex',
                  alignItems: 'flex-start',
                  columnGap: '3rem',
                  [theme.breakpoints.down('md')]: {
                     columnGap: '2.5rem'
                  }
               })}
            >
               {[<FacebookIcon />, <LinkedInIcon />, <GitHubIcon />].map((icon, index) => (
                  <Button
                     key={index}
                     disableElevation
                     variant='contained'
                     color='secondary'
                     sx={theme => ({
                        color: '#fff',
                        minHeight: 0,
                        minWidth: 0,
                        padding: '10px',
                        borderRadius: '50%',
                        [theme.breakpoints.down('md')]: {
                           padding: '9px'
                        },
                        [theme.breakpoints.down('sm')]: {
                           padding: '8px'
                        }
                     })}
                  >
                     {icon}
                  </Button>
               ))}
            </Box>
            <Box>
               <Typography
                  sx={theme => ({
                     [theme.breakpoints.down('md')]: {
                        fontSize: '15px'
                     },
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '14px'
                     }
                  })}
               >
                  Copyright&copy; 2022 All Rights Reserved
               </Typography>
            </Box>
         </Box>
      </Box>
   );
};

export default Footer;