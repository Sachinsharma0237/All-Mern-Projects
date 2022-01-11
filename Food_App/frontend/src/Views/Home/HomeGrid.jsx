import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

export default function HomeGrid() {
  return (
    <Box style={{backgroundColor:"white"}}
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="https://mui.com/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <h6 variant="h6" sx={{ my: 5 }}>
                The best luxury hotels
              </h6>
              <h5 variant="h5">
                {
                  'From the latest trendy boutique hotel to the iconic palace with XXL pool'
                }

                {
                  ', go for a mini-vacation just a few subway stops away from your home.'
                }
              </h5>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues2.svg"
                alt="graph"
                sx={{ height: 55 }}
              />
              <h6 variant="h6" sx={{ my: 5 }}>
                New experiences
              </h6>
              <h5 variant="h5">
                {
                  'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
                }

                {'your Sundays will not be alike.'}
              </h5>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues3.svg"
                alt="clock"
                sx={{ height: 55 }}
              />
              <h6 variant="h6" sx={{ my: 5 }}>
                Exclusive rates
              </h6>
              <h5 variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </h5>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

