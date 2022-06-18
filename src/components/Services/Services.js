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
      description: "I build web applications using React JS and many other modern front end technologies",
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
         id='service'
         sx={{
            backgroundColor: '#f8f6fe'
         }}
      >
         <Box
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
            <Grid
               container
               sx={theme => ({
                  width: '90%',
                  margin: '0 auto',
                  justifyContent: 'center',
                  [theme.breakpoints.down('lg')]: {
                     width: '100%'
                  },
                  [theme.breakpoints.down('sm')]: {
                     width: '70%'
                  },
                  [theme.breakpoints.down(500)]: {
                     width: '90%'
                  },
                  [theme.breakpoints.down(350)]: {
                     width: '100%'
                  }
               })}
            >
               {skillsDetails.map((item, index) => (
                  <Grid
                     item
                     key={index}
                     xs={12} xm={12} sm={6} md={4} lg={3} xl={3}
                     sx={theme => ({
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '1rem 10px',
                        [theme.breakpoints.down('lg')]: {
                           padding: '10px'
                        }
                     })}
                  >
                     <Card
                        elevation={0}
                        sx={theme => ({
                           padding: '3rem 2rem',
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           justifyContent: 'center',
                           rowGap: '1rem',
                           border: '1px solid #fff',
                           transition: '0.3s ease',
                           backgroundColor: '#fff',
                           boxShadow: '0 0 10px 0px rgba(120, 76, 251, 0.3)',
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
                              fontWeight: 700,
                              textAlign: 'center'
                           }}
                        >
                           {item.title}
                        </Typography>
                        <Typography
                           sx={theme => ({
                              color: 'text.disabled',
                              fontWeight: 500,
                              fontSize: '14px',
                              textAlign: 'center',
                              [theme.breakpoints.down('sm')]: {
                                 fontSize: '13px'
                              }
                           })}
                        >
                           {item.description}
                        </Typography>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </Box>
      </Box>
   );
};

export default Services;