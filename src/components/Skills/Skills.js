import React from 'react';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import js from '../../assets/skills/js.png';
import scss from '../../assets/skills/scss.png';
import react from '../../assets/skills/react.png';
import redux from '../../assets/skills/redux.png';
import mui from '../../assets/skills/mui.png';
import git from '../../assets/skills/git.png';
import github from '../../assets/skills/github.png';
import node from '../../assets/skills/node.png';
import figma from '../../assets/skills/figma.png';
import firebase from '../../assets/skills/firebase.png';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

const icons = [html, css, js, scss, react, redux, mui, node, figma, git, github, firebase];

const colors = ['#fbe8ce', '#def7fe', '#FAF4B7', '#FEE3EC', '#E4FBFF', '#F6E5F5', '#D6E5FA', '#E6F8F9', '#F6DFEB', '#FFDFD3', '#F4F3F3', '#FFF7BC'];

const skillsText = [
   "I work with modern technologies that include HTML5, CSS3, SCSS, JavaScript, Material UI, React JS, Redux, Redux Toolkit, Node, Git, Firebase etc.",
   "I have a good sense of aesthetics and experience in responsive web design. I put special efforts into optimizing the code and providing the best user experience possible."
];

const Skills = () => {
   const theme = useTheme();
   const xlWidth = useMediaQuery(theme.breakpoints.down('xl'));
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Box
         id='skills'
         className='container'
         sx={theme => ({
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: '15rem',
            padding: '9rem 2rem',
            [theme.breakpoints.down('xl')]: {
               padding: '8rem 2rem',
               columnGap: '8rem'
            },
            [theme.breakpoints.down('lg')]: {
               padding: '7rem 2rem',
               columnGap: '5rem'
            },
            [theme.breakpoints.down('md')]: {
               padding: '6rem 2rem',
               columnGap: '3rem'
            },
            [theme.breakpoints.down('sm')]: {
               padding: '5rem 1rem',
               gridTemplateColumns: 'none',
               grid: 'row',
               columnGap: 0,
               rowGap: '3rem'
            }
         })}
      >
         <Box
            sx={theme => ({
               height: '100%',
               width: '100%',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-start',
               justifyContent: 'flex-start',
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
                  My Skills
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
                  // width: '80%',
                  marginBottom: '10px',
                  // [theme.breakpoints.down('xl')]: {
                  //    width: '90%'
                  // },
                  // [theme.breakpoints.down('lg')]: {
                  //    width: '100%'
                  // }
               })}
            >
               {skillsText.map((text, index) => (
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
         </Box>
         <Grid
            container
            rowGap={smWidth ? 6 : 7}
            sx={theme => ({
               // width: '80%',
               margin: '0 auto',
               // [theme.breakpoints.down('xl')]: {
               //    width: '100%'
               // }
            })}
         >
            {icons.map((item, index) => (
               <Grid
                  item
                  key={index}
                  xs={3}
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center'
                  }}
               >
                  <Box
                     sx={theme => ({
                        height: '100px',
                        width: '100px',
                        borderRadius: '50%',
                        backgroundColor: colors[index],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        [theme.breakpoints.down('xl')]: {
                           height: '80px',
                           width: '80px'
                        },
                        [theme.breakpoints.down('lg')]: {
                           height: '70px',
                           width: '70px'
                        },
                        [theme.breakpoints.down('md')]: {
                           height: '50px',
                           width: '50px'
                        }
                     })}
                  >
                     <img
                        style={{
                           height: xlWidth && !lgWidth && !mdWidth ? '40px' :
                              xlWidth && lgWidth && !mdWidth ? '35px' :
                                 xlWidth && lgWidth && mdWidth ? '30px' : '50px',
                           width: xlWidth && !lgWidth && !mdWidth ? '40px' :
                              xlWidth && lgWidth && !mdWidth ? '35px' :
                                 xlWidth && lgWidth && mdWidth ? '30px' : '50px',
                        }}
                        src={item}
                        alt=""
                     />
                  </Box>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

export default Skills;