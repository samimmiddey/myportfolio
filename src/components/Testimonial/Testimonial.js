import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import john from '../../assets/testimonial/john.jpg';
import sarah from '../../assets/testimonial/sarah.jpg';
import michael from '../../assets/testimonial/michael.jpg';
import brad from '../../assets/testimonial/brad.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import TestimonialCard from '../UI/TestimonialCard';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
   {
      name: 'John Wu',
      img: john,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ratione excepturi voluptas autem et nihil! Amet quo placeat odio quaerat tempore veritatis, mollitia, quas tenetur quisquam atque molestias est consequatur possimus eligendi fugit eius repudiandae. Modi iste dolorum, amet molestiae placeat tempore optio voluptate sit iusto ex harum voluptas! Ratione",
      position: 'CEO & Founder at Apple'
   },
   {
      name: 'Sarah Williams',
      img: sarah,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ratione excepturi voluptas autem et nihil! Amet quo placeat odio quaerat tempore veritatis, mollitia, quas tenetur quisquam atque molestias est consequatur possimus eligendi fugit eius repudiandae. Modi iste dolorum, amet molestiae placeat tempore optio voluptate sit iusto ex harum voluptas! Ratione",
      position: 'UI/UX Designer at Amazon'
   },
   {
      name: 'Michael Sanders',
      img: michael,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ratione excepturi voluptas autem et nihil! Amet quo placeat odio quaerat tempore veritatis, mollitia, quas tenetur quisquam atque molestias est consequatur possimus eligendi fugit eius repudiandae. Modi iste dolorum, amet molestiae placeat tempore optio voluptate sit iusto ex harum voluptas! Ratione",
      position: 'Senior Developer at Netflix'
   },
   {
      name: 'Brad Traversy',
      img: brad,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ratione excepturi voluptas autem et nihil! Amet quo placeat odio quaerat tempore veritatis, mollitia, quas tenetur quisquam atque molestias est consequatur possimus eligendi fugit eius repudiandae. Modi iste dolorum, amet molestiae placeat tempore optio voluptate sit iusto ex harum voluptas! Ratione",
      position: 'CEO & Founder at Traversy Media'
   },
];

const Testimonial = () => {
   const [swiper, setSwiper] = useState();
   const prevRef = useRef();
   const nextRef = useRef();

   useEffect(() => {
      if (swiper) {
         swiper.params.navigation.prevEl = prevRef.current;
         swiper.params.navigation.nextEl = nextRef.current;
         swiper.navigation.init();
         swiper.navigation.update();
      }
   }, [swiper]);

   return (
      <Box
         id='service'
         sx={{
            position: 'relative'
         }}
      >
         <Box
            className='container'
            sx={theme => ({
               padding: '9rem 2rem 184px 2rem',
               display: 'flex',
               flexDirection: 'column',
               rowGap: '3rem',
               [theme.breakpoints.down('xl')]: {
                  padding: '8rem 2rem 168px 2rem',
                  rowGap: '2.75rem'
               },
               [theme.breakpoints.down('lg')]: {
                  padding: '7rem 2rem 152px 2rem',
                  rowGap: '2.5rem'
               },
               [theme.breakpoints.down('md')]: {
                  padding: '6rem 2rem 136px 2rem',
                  rowGap: '2.25rem'
               },
               [theme.breakpoints.down('sm')]: {
                  padding: '5rem 1rem 110px 1rem',
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
                     Testimonials
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
                     See what my clients have to say about me
                  </Typography>
               </Box>
            </Box>
            {/* Slider Box */}
            <Box
               className='swiper-container'
               sx={{
                  margin: '0 auto',
                  marginTop: '-3rem',
                  maxWidth: '864px',
                  width: '100%'
               }}
            >
               <Box className='card-swiper'>
                  {/* Custom Buttons */}
                  <Box className='swiper-button-container'>
                     <Button
                        variant='contained'
                        disableElevation
                        className='swiper-button'
                        ref={prevRef}
                     >
                        <ArrowBackIosNewIcon sx={{ fontSize: '1.25rem' }} />
                     </Button>
                     <Button
                        variant='contained'
                        disableElevation
                        className='swiper-button'
                        ref={nextRef}
                     >
                        <ArrowForwardIosIcon sx={{ fontSize: '1.25rem' }} />
                     </Button>
                  </Box>
                  {/* Slides */}
                  <Swiper
                     slidesPerView={1}
                     spaceBetween={16}
                     slidesPerGroup={1}
                     loop={true}
                     navigation={{
                        prevEl: prevRef?.current,
                        nextEl: nextRef?.current
                     }}
                     modules={[Navigation]}
                     className="mySwiper"
                     updateOnWindowResize
                     observer
                     observeParents
                     onSwiper={setSwiper}
                     breakpoints={{
                        250: {
                           slidesPerView: 1,
                        },
                        375: {
                           slidesPerView: 1,
                        },
                        650: {
                           slidesPerView: 1,
                        },
                        1250: {
                           slidesPerView: 1,
                        }
                     }}
                  >
                     {testimonials.map((data, index) => (
                        <SwiperSlide key={index}>
                           <TestimonialCard
                              index={index}
                              data={data}
                           />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </Box>
            </Box >
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

export default Testimonial;