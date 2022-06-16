import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import ContactForm from '../UI/ContactForm';
import GoogleMap from '../UI/GoogleMap';

const Contact = () => {
   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   return (
      <Box
         id='contact'
         className='container'
         sx={theme => ({
            padding: '9rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '3rem',
            [theme.breakpoints.down('xl')]: {
               padding: '8rem 2rem',
               rowGap: '2.75rem'
            },
            [theme.breakpoints.down('lg')]: {
               padding: '7rem 2rem',
               rowGap: '2.5rem'
            },
            [theme.breakpoints.down('md')]: {
               padding: '6rem 2rem',
               rowGap: '2.25rem'
            },
            [theme.breakpoints.down('sm')]: {
               padding: '5rem 1rem',
               rowGap: '2rem'
            }
         })}
      >
         <Box
            sx={theme => ({
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               rowGap: '2rem',
               [theme.breakpoints.down('md')]: {
                  rowGap: '1.5rem'
               },
               [theme.breakpoints.down('sm')]: {
                  rowGap: '1rem'
               }
            })}
         >
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
            >
               <Typography
                  variant='h3'
                  sx={theme => ({
                     fontWeight: 600,
                     [theme.breakpoints.down('xl')]: {
                        fontSize: '2.5rem'
                     },
                     [theme.breakpoints.down('lg')]: {
                        fontSize: '2rem'
                     },
                     [theme.breakpoints.down('md')]: {
                        fontSize: '1.75rem'
                     }
                  })}
               >
                  Contact
               </Typography>
               <Box
                  sx={{
                     height: '4px',
                     width: '65%',
                     backgroundColor: '#784cfb',
                     marginTop: '10px',
                     borderRadius: '10px'
                  }}
               />
            </Box>
            <Box>
               <Typography
                  sx={theme => ({
                     color: 'text.disabled',
                     fontWeight: 500,
                     textAlign: 'center',
                     fontSize: '16px',
                     [theme.breakpoints.down('lg')]: {
                        fontSize: '15px'
                     },
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '14px'
                     }
                  })}
               >
                  Get in touch with me at your convenience
               </Typography>
            </Box>
         </Box>
         <Grid
            container
            columnSpacing={mdWidth ? 0 : 5}
            rowSpacing={mdWidth ? 5 : 0}
         >
            <Grid
               item xs={12} sm={12} md={6} lg={6} xl={6}
               sx={theme => ({
                  [theme.breakpoints.down('md')]: {
                     padding: '0 1rem'
                  }
               })}
            >
               <ContactForm />
            </Grid>
            <Grid
               item xs={12} sm={12} md={6} lg={6} xl={6}
               sx={theme => ({
                  [theme.breakpoints.down('md')]: {
                     height: '400px',
                     padding: '0 1rem'
                  }
               })}
            >
               <GoogleMap />
            </Grid>
         </Grid>
      </Box >
   );
};

export default Contact;