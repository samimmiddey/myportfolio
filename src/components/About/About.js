import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import js from '../../assets/skills/js.png';
import react from '../../assets/skills/react.png';
import redux from '../../assets/skills/redux.png';
import mui from '../../assets/skills/mui.png';
import PrimaryButton from '../UI/PrimaryButton';
import SendIcon from '@mui/icons-material/Send';

const skills = [html, css, js, react, redux, mui];

const aboutText = [
   "I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.",
   "I'm quite confident, naturally curious and constantly working hard to be the better version of me every single day.",
   "If I had to describe myself in one sentence that would be family person, football fanatic & tech obsessed."

];

const About = () => {
   const theme = useTheme();
   const xlWidth = useMediaQuery(theme.breakpoints.down('xl'));
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   const height = xlWidth && !mdWidth ? '45px' : xlWidth && mdWidth ? '40px' : '50px';

   return (
      <Box
         id='about'
         sx={{
            position: 'relative'
         }}
      >
         <Box
            className='container'
            sx={theme => ({
               // marginTop: '15rem',
               padding: '9rem 2rem',
               display: 'grid',
               gridTemplateColumns: 'repeat(2, 1fr)',
               minHeight: '100px',
               [theme.breakpoints.down('xl')]: {
                  // marginTop: '12rem',
                  padding: '8rem 2rem',
               },
               [theme.breakpoints.down('lg')]: {
                  // marginTop: '10rem',
                  padding: '7rem 2rem',
               },
               [theme.breakpoints.down('md')]: {
                  // marginTop: '8rem',
                  padding: '6rem 2rem'
               },
               [theme.breakpoints.down('sm')]: {
                  // marginTop: '6rem',
                  padding: '5rem 1rem',
                  gridTemplateColumns: 'none',
                  gridTemplateRows: 'repeat(2, 1fr)'
               },
               [theme.breakpoints.down(500)]: {
                  padding: '1rem 1rem 5rem 1rem'
               },
               [theme.breakpoints.down(400)]: {
                  padding: '0 1rem 5rem 1rem'
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
               <Box>
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
                     sx={{
                        height: '4px',
                        width: '65%',
                        backgroundColor: '#784cfb',
                        marginTop: '10px',
                        borderRadius: '10px'
                     }}
                  />
               </Box>
               <Box
                  sx={theme => ({
                     display: 'flex',
                     flexDirection: 'column',
                     rowGap: '1rem',
                     width: '80%',
                     marginBottom: '10px',
                     [theme.breakpoints.down('xl')]: {
                        width: '90%'
                     },
                     [theme.breakpoints.down('lg')]: {
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
                  icon={<SendIcon sx={{ marginLeft: '10px', fontSize: '1.3rem' }} />}
               />
            </Box>
         </Box>
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

export default About;