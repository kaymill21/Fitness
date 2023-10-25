import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#8B0000" fontWeight="600" fontSize="30px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '38px', xs: '35px' } }} mb="23px" mt="30px">
      IT NEVER GETS EASIER,<br />
      YOU JUST GET BETTER AT IT
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      ON THE WAY TO BECOMING MY BEST SELF
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#8B0000', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#8B0000" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={{ width: '640px', height: '640px' }} />
  </Box>
);

export default HeroBanner;
