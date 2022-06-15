import React from 'react';
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import dashboard from '../../assets/projects/dashboard.jpg';
import ecommerce from '../../assets/projects/ecommerce.jpg';
import PortfolioCard from '../UI/PortfolioCard';

const buttonText = ['All', 'UI/UX', 'React JS', 'Web App'];

const projectDetails = [
   {
      img: ecommerce,
      title: 'Ecommerce Website',
      category: ['REACT JS', 'ALL'],
      description: 'A modern ecommerce website built using React JS, Redux Toolkit, Material UI, Commerce JS, Firebase & much more!',
      demo: 'https://shopcult.netlify.app',
      git: 'https://github.com/samimmiddey/shopcult'
   },
   {
      img: dashboard,
      title: 'Admin Dashboard',
      category: ['REACT JS', 'ALL', 'UI/UX'],
      description: 'A modern admin dashboard built using React JS, Redux Toolkit, Material UI, Firebase Authentication, Recharts & much more!',
      demo: 'https://myreactadminpanel.netlify.app',
      git: 'https://github.com/samimmiddey/react-admin'
   },
   {
      img: ecommerce,
      title: 'Ecommerce Website',
      category: ['REACT JS', 'ALL'],
      description: 'A modern ecommerce website built using React JS, Redux Toolkit, Material UI, Commerce JS, Firebase & much more!',
      demo: 'https://shopcult.netlify.app',
      git: 'https://github.com/samimmiddey/shopcult'
   },
   {
      img: dashboard,
      title: 'Admin Dashboard',
      category: ['REACT JS', 'ALL', 'UI/UX'],
      description: 'A modern admin dashboard built using React JS, Redux Toolkit, Material UI, Firebase Authentication, Recharts & much more!',
      demo: 'https://myreactadminpanel.netlify.app',
      git: 'https://github.com/samimmiddey/react-admin'
   },
];

const Portfolio = () => {
   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Box
         id='portfolio'
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
                  Portfolio
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
                  All of my latest work created with modern technologies
               </Typography>
            </Box>
         </Box>
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               columnGap: '1rem',
               flexWrap: 'wrap',
               rowGap: '1rem'
            }}
         >
            {buttonText.map((text, index) => (
               <Button
                  size={smWidth ? 'small' : 'medium'}
                  key={index}
                  variant='contained'
                  disableElevation
                  sx={{
                     textTransform: 'none'
                  }}
               >
                  {text}
               </Button>
            ))}
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
            {projectDetails.map((project, index) => (
               <Grid
                  item
                  key={index}
                  xs={12} xm={12} sm={6} md={4} lg={3} xl={3}
                  sx={theme => ({
                     display: 'flex',
                     justifyContent: 'center',
                     padding: '1rem 8px',
                     [theme.breakpoints.down('lg')]: {
                        padding: '8px'
                     }
                  })}
               >
                  <PortfolioCard
                     key={index}
                     details={project}
                  />
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

export default Portfolio;