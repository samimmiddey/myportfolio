import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';
import mui from '../../assets/mui.png';
import PrimaryButton from '../UI/PrimaryButton';
import SendIcon from '@mui/icons-material/Send';

const skills = [html, css, js, react, redux, mui];

const aboutText = [
   "I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.",
   "I'm quite confident, naturally curious and constantly working hard to be the better version of me every signle day.",
   "If I had to describe myself in one sentence that would be family person, football fanatic &amp; tech obsessed."

];

const About = () => {
   const theme = useTheme();
   const xlWidth = useMediaQuery(theme.breakpoints.down('xl'));
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));
   // const smWidth = useMediaQuery(theme.breakpoints.down(500));

   const height = xlWidth && !mdWidth ? '45px' : xlWidth && mdWidth ? '40px' : '50px';

   return (
      <Box
         className='container'
         sx={theme => ({
            marginTop: '15rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            alignItems: 'center',
            minHeight: '100px',
            [theme.breakpoints.down('xl')]: {
               marginTop: '12rem'
            },
            [theme.breakpoints.down('lg')]: {
               marginTop: '10rem'
            },
            [theme.breakpoints.down('md')]: {
               marginTop: '8rem'
            },
            [theme.breakpoints.down('sm')]: {
               marginTop: '3rem',
               gridTemplateColumns: 'none',
               gridTemplateRows: 'repeat(2, 1fr)'
            }
         })}
      >
         <Box
            sx={{
               height: '100%',
               width: '100%',
               position: 'relative'
            }}
         >
            <Box
               sx={theme => ({
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  // overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  paddingBottom: '25%',
                  [theme.breakpoints.down('xl')]: {
                     paddingBottom: '30%',
                  },
                  [theme.breakpoints.down('lg')]: {
                     paddingBottom: '35%',
                  },
                  [theme.breakpoints.down('md')]: {
                     paddingBottom: '40%',
                  }
               })}
            >
               <Box className="cubespinner">
                  {skills.map((item, index) => (
                     <Box key={index} className={`${'face' + (index + 1)} face`}>
                        <img src={item} alt='' />
                     </Box>
                  ))}
               </Box>
            </Box>
         </Box>
         <Box
            sx={theme => ({
               height: '100%',
               width: '100%',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-start',
               justifyContent: 'center',
               rowGap: '2rem',
               [theme.breakpoints.down('md')]: {
                  rowGap: '1.5rem'
               }
            })}
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
               About Me
            </Typography>
            <Box
               sx={theme => ({
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '1rem',
                  width: '80%',
                  marginBottom: '10px',
                  [theme.breakpoints.down('xl')]: {
                     width: '100%'
                  }
               })}
            >
               {aboutText.map((text, index) => (
                  <Typography
                     key={index}
                     sx={theme => ({
                        color: 'text.disabled',
                        fontWeight: 500,
                        fontSize: '16px',
                        [theme.breakpoints.down('lg')]: {
                           fontSize: '15px'
                        },
                        [theme.breakpoints.down('sm')]: {
                           fontSize: '14px'
                        }
                     })}
                  >
                     {text}
                  </Typography>
               ))}
            </Box>
            <PrimaryButton
               text='Contact Me'
               height={height}
               icon={<SendIcon sx={{ marginLeft: '10px' }} />}
            />
         </Box>
      </Box>
   );
};

export default About;