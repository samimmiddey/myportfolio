import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import frontend from '../../assets/frontend.png';
import designer from '../../assets/designer.png';
import development from '../../assets/development.png';
import ui from '../../assets/ui.png';

const skillsDetails = [
   {
      title: 'UI/UX Designing',
      description: "I make sure that not only the UI is aesthetically pleasing, but the user experience as well",
      icon: ui
   },
   {
      title: 'Web Designer',
      description: "I'm a web designer with a passion for creating beautiful functional web applications",
      icon: designer
   },
   {
      title: 'React Developer',
      description: "I build web applications using React and many other modern front end technologies",
      icon: development
   },
   {
      title: 'Front End Developer',
      description: "I'm a front end developer focused heavily on the user experience aspect of web applications",
      icon: frontend
   }
];

const Services = () => {
   return (
      <Box
         sx={{
            position: 'relative'
         }}
      >
         <Box
            className='container'
            sx={theme => ({
               padding: '10rem 2rem',
               display: 'flex',
               flexDirection: 'column',
               rowGap: '5rem',
               [theme.breakpoints.down('xl')]: {
                  padding: '9rem 2rem',
                  rowGap: '4.5rem'
               },
               [theme.breakpoints.down('lg')]: {
                  padding: '8rem 2rem',
                  rowGap: '4rem'
               },
               [theme.breakpoints.down('md')]: {
                  padding: '7rem 2rem',
                  rowGap: '3.5rem'
               },
               [theme.breakpoints.down('sm')]: {
                  padding: '5rem 1rem',
                  rowGap: '3rem'
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
                     Services
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
                     I know that good design means good business
                  </Typography>
               </Box>
            </Box>
            <Grid container spacing={2}>
               {skillsDetails.map((item, index) => (
                  <Grid item key={index} xs={12} xm={12} sm={6} md={4} lg={3} xl={3}>
                     <Card
                        elevation={0}
                        sx={theme => ({
                           padding: '3rem 2rem',
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           justifyContent: 'center',
                           rowGap: '1rem',
                           transition: '0.3s ease',
                           '&:hover': {
                              boxShadow: '0 0 20px 0px #784cfb'
                           },
                           flex: 1,
                           [theme.breakpoints.down('md')]: {
                              padding: '2rem 1rem'
                           }
                        })}
                     >
                        <img src={item.icon} alt="" />
                        <Typography
                           variant='h6'
                           sx={{
                              fontWeight: 700
                           }}
                        >
                           {item.title}
                        </Typography>
                        <Typography
                           sx={theme => ({
                              color: 'text.disabled',
                              fontWeight: 500,
                              fontSize: '16px',
                              textAlign: 'center',
                              [theme.breakpoints.down('lg')]: {
                                 fontSize: '15px'
                              },
                              [theme.breakpoints.down('sm')]: {
                                 fontSize: '14px'
                              }
                           })}
                        >
                           {item.description}
                        </Typography>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </Box >
         <Box
            sx={{
               position: 'absolute',
               top: 0,
               left: 0,
               right: 0,
               bottom: 0,
               height: '100%',
               width: '100%',
               backgroundColor: '#f8f6fe',
               zIndex: -1
            }}
         />
      </Box>
   );
};

export default Services;