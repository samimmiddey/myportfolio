import React from 'react';
import { Avatar, Box, Card, Typography, useMediaQuery, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import leftquote from '../../assets/leftquote.png';
import rightquote from '../../assets/rightquote.png';

const TestimonialCard = ({ data }) => {
   const theme = useTheme();
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Card
         className='testimonial-card'
         elevation={0}
         sx={theme => ({
            overflow: 'visible',
            margin: '6rem 2rem 2rem 2rem',
            padding: '2rem 1.5rem',
            border: '1px solid #fff',
            transition: '0.3s ease',
            boxShadow: '0 0 10px 0px rgba(120, 76, 251, 0.3)',
            '&:hover': {
               boxShadow: '0 0 20px 0px #784cfb'
            },
            [theme.breakpoints.down('sm')]: {
               padding: '2rem 1rem 1rem 1rem',
               margin: '6rem 1.5rem 2rem 1.5rem'
            }
         })}
      >
         <Box
            sx={theme => ({
               display: 'flex',
               alignItems: 'center',
               flexDirection: 'column',
               rowGap: '1rem',
               zIndex: 99,
               marginTop: '-87px',
               [theme.breakpoints.down('sm')]: {
                  marginTop: '-74.5px'
               }
            })}
         >
            <Box
               className='testimonial-img'
               sx={{
                  padding: '5px',
                  boxShadow: '0 0 10px 0px rgba(120, 76, 251, 0.3)',
                  display: 'inline-flex',
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  transition: '0.3s ease'
               }}
            >
               <Avatar
                  src={data.img}
                  alt=''
                  sx={{
                     height: smWidth ? '75px' : '100px',
                     width: smWidth ? '75px' : '100px'
                  }}
               />
            </Box>
            <Box
               sx={{
                  textAlign: 'center'
               }}
            >
               <Typography
                  variant='h6'
                  sx={{ fontWeight: 700 }}>
                  {data.name}
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
                  {data.position}
               </Typography>
            </Box>
            <Box
               sx={theme => ({
                  display: 'flex',
                  justifyContent: 'center',
                  columnGap: '10px',
                  [theme.breakpoints.down('sm')]: {
                     marginTop: '-6px'
                  }
               })}
            >
               <FacebookIcon
                  sx={theme => ({
                     fontSize: '1.75rem',
                     color: '#784cfb',
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '1.5rem'
                     }
                  })} />
               <LinkedInIcon
                  sx={theme => ({
                     fontSize: '1.75rem',
                     color: '#784cfb',
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '1.5rem'
                     }
                  })}
               />
               <GitHubIcon
                  sx={theme => ({
                     fontSize: '1.75rem',
                     color: '#784cfb',
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '1.5rem'
                     }
                  })}
               />
            </Box>
         </Box>
         <Box
            sx={theme => ({
               marginTop: '1rem',
               [theme.breakpoints.down('sm')]: {
                  marginTop: '12px'
               }
            })}
         >
            <Box>
               <img style={{ height: '50px', width: '50px' }} src={leftquote} alt="" />
            </Box>
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
               {data.comment}
            </Typography>
            <Box
               sx={{
                  textAlign: 'end'
               }}
            >
               <img style={{ height: '50px', width: '50px' }} src={rightquote} alt="" />
            </Box>
         </Box>
      </Card>
   );
};

export default TestimonialCard;