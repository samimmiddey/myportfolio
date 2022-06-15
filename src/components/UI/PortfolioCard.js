import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const PortfolioCard = ({ details }) => {
   const theme = useTheme();
   const lgWidth = useMediaQuery(theme.breakpoints.down('lg'));
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Card
         elevation={0}
         // sx={{maxWidth: '350px'}}
         sx={{
            transition: '0.3s ease',
            boxShadow: '0 0 10px 0px rgba(120, 76, 251, 0.3)',
            '&:hover': {
               boxShadow: '0 0 20px 0px #784cfb'
            }
         }}
      >
         <CardMedia
            component="img"
            alt="Image"
            height={lgWidth && !smWidth ? '175' : lgWidth && smWidth ? '150' : '200'}
            image={details.img}
         />
         <CardContent
            sx={{
               paddingBottom: 0
            }}
         >
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '10px'
               }}
            >
               <Typography
                  variant='h6'
                  sx={{
                     fontWeight: 700
                  }}
               >
                  {details.title}
               </Typography>
               <Typography
                  sx={theme => ({
                     color: 'text.disabled',
                     fontWeight: 500,
                     fontSize: '14px',
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '13px'
                     }
                  })}
               >
                  {details.description}
               </Typography>
            </Box>
            <Box
               sx={{
                  mt: 2,
                  display: 'flex',
                  columnGap: '10px'
               }}
            >
               <Button
                  size={smWidth ? 'small' : 'medium'}
                  disableElevation
                  variant='outlined'
                  sx={{
                     textTransform: 'none'
                  }}
               >
                  Code
                  <GitHubIcon sx={{ marginLeft: '8px', fontSize: '1.25rem' }} />
               </Button>
               <Button
                  size={smWidth ? 'small' : 'medium'}
                  disableElevation
                  variant='outlined'
                  sx={{
                     textTransform: 'none'
                  }}
               >
                  Demo
                  <VisibilityOutlinedIcon sx={{ marginLeft: '8px', fontSize: '1.25rem' }} />
               </Button>
            </Box>
         </CardContent>
      </Card>
   );
};

export default PortfolioCard;