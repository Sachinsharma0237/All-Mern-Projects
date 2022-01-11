import React from 'react'
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import HomeLayout from './HomeLayout';

const backgroundImage =
  'https://wallpapercave.com/wp/wp5540043.jpg';

export default function Home(){

  return(
    <HomeLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
   <h1 color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Sundays
   </h1> 
   <h2
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
   </h2>  
   <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Register
   </Button>
   <h4 variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
   </h4>

    </HomeLayout>
  )

}