import { Box, Typography } from '@mui/material';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const GoogleMap = () => {
   return (
      <Box
         sx={{
            height: '100%',
            position: 'relative'
         }}
      >
         <Box
            sx={theme => ({
               position: 'absolute',
               top: '10px',
               left: '55px',
               padding: '1rem',
               borderRadius: '5px',
               backgroundColor: '#f8f6fe',
               zIndex: 999,
               [theme.breakpoints.down(500)]: {
                  padding: '14px'
               },
               [theme.breakpoints.down(350)]: {
                  top: '65%',
                  left: '10px',
                  padding: '12px'
               }
            })}
         >
            <Typography
               variant='h6'
               sx={theme => ({
                  fontWeight: 700,
                  [theme.breakpoints.down(500)]: {
                     fontSize: '1rem'
                  }
               })}
            >
               Samim Middey
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
               Sarenga, Sankrail, Howrah
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
               711309, West Bengal
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
               samimmiddey@gmail.com
            </Typography>
         </Box>
         <Box
            sx={{
               height: '100%'
            }}
         >
            <MapContainer center={[22.532680, 88.207040]} zoom={12}>
               <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               <Marker position={[22.532680, 88.207040]}>
                  <Popup>Samim lives here, come over for a cup of coffee :)</Popup>
               </Marker>
            </MapContainer>
         </Box>
      </Box>
   );
};

export default GoogleMap;