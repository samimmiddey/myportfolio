import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import heroImg from '../../assets/hero.svg';
import PrimaryButton from '../UI/PrimaryButton';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';

const Home = () => {
   const [scroll, setScroll] = useState(false);

   const theme = useTheme();
   const xlWidth = useMediaQuery(theme.breakpoints.down('xl'));
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));
   // const smWidth = useMediaQuery(theme.breakpoints.down(500));

   const height = xlWidth && !mdWidth ? '45px' : xlWidth && mdWidth ? '40px' : '50px';

   useEffect(() => {
      const scrollInterval = setInterval(() => {
         if (scroll) {
            setScroll(false);
         } else {
            setScroll(true);
         }
      }, 1000);

      return () => clearInterval(scrollInterval);
   }, [scroll]);

   return (
      <Box
         id='home'
         className='container'
      >
         <Box
            sx={theme => ({
               paddingTop: '70px',
               minHeight: '100vh',
               display: 'grid',
               gridTemplateColumns: 'repeat(2, 1fr)',
               alignItems: 'center',
               [theme.breakpoints.down('md')]: {
                  minHeight: 0,
                  padding: '9rem 0'
               },
               [theme.breakpoints.down('sm')]: {
                  padding: 0,
                  minHeight: '100vh',
                  gridTemplateColumns: 'none',
                  rowGap: '2rem'
               },
               [theme.breakpoints.down(500)]: {
                  minHeight: 'calc(100vh - 60px)'
               }
            })}
         >
            <Box
               sx={theme => ({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  rowGap: '2rem',
                  [theme.breakpoints.down('md')]: {
                     rowGap: '1.5rem',
                     height: '100%'
                  }
               })}
            >
               <Typography
                  variant='h2'
                  sx={theme => ({
                     fontWeight: 700,
                     fontSize: '3.5rem',
                     marginTop: '1rem',
                     [theme.breakpoints.down('xl')]: {
                        fontSize: '3rem',
                     },
                     [theme.breakpoints.down('lg')]: {
                        fontSize: '2.5rem'
                     },
                     [theme.breakpoints.down('md')]: {
                        fontSize: '2rem',
                     },
                     [theme.breakpoints.down('sm')]: {
                        marginTop: 0
                     },
                     [theme.breakpoints.down(350)]: {
                        fontSize: '1.5rem'
                     }
                  })}
               >
                  Hi,
                  <br />
                  I'm Samim
                  <br />
                  Web Developer
               </Typography>
               <Typography
                  sx={theme => ({
                     marginTop: '-1rem',
                     color: 'text.disabled',
                     fontWeight: 600,
                     fontSize: '1.1rem',
                     letterSpacing: '5px',
                     [theme.breakpoints.down('xl')]: {
                        fontSize: '1rem'
                     },
                     [theme.breakpoints.down('lg')]: {
                        fontSize: '14px'
                     },
                     [theme.breakpoints.down('md')]: {
                        fontSize: '13px'
                     },
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '12px',
                        marginTop: '-8px'
                     }
                  })}
               >
                  {!mdWidth && 'WEB DESIGNER |'} FRONT END DEVELOPER
               </Typography>
               <PrimaryButton
                  text='Download CV'
                  height={height}
                  icon={<DownloadIcon sx={{ marginLeft: '10px' }} />}
               />
               <Box
                  sx={theme => ({
                     marginTop: '2rem',
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '10px',
                     [theme.breakpoints.down('md')]: {
                        marginTop: '1.5rem',
                     },
                     [theme.breakpoints.down('sm')]: {
                        marginTop: '1.25rem',
                     }
                  })}
               >
                  <MouseOutlinedIcon sx={{ color: '#784cfb' }} />
                  <Typography
                     sx={theme => ({
                        color: 'text.secondary',
                        fontWeight: 500,
                        [theme.breakpoints.down('sm')]: {
                           fontSize: '13px'
                        }
                     })}
                  >
                     Scroll Down
                  </Typography>
                  <ArrowDownwardIcon
                     sx={{
                        color: '#784cfb',
                        transition: '1s ease',
                        transform: scroll ? 'translateY(10px)' : 'translateY(0)'
                     }}
                  />
               </Box>
            </Box>
            <Box
               sx={theme => ({
                  [theme.breakpoints.down('sm')]: {
                     gridRow: '1 / 2',
                     width: '75%',
                     margin: '0 auto',
                     alignSelf: 'end'
                  }
               })}
            >
               <img
                  style={{
                     height: '100%',
                     width: '100%',
                     objectFit: 'contain'
                  }}
                  src={heroImg}
                  alt="Hero"
               />
            </Box>
         </Box>
      </Box>
   );
};

export default Home;