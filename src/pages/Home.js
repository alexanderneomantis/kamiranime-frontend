import {styled} from "@mui/material/styles";
import Page from '../components/Page'
import Product from "../components/Product";
import {Box, Container, Grid, Typography} from "@mui/material";
import dayOffer from '../assets/img/dayOffer.png'
import bigHeart from '../assets/img/newHeart.png'
import moment from 'moment'
import {useCallback, useEffect, useRef, useState} from "react";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const RootStyle = styled(Page)(({theme}) => ({
  minHeight: "100%",
  width: "100%",
  paddingTop: APP_BAR_MOBILE,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP,
  },
}));


export default function Home() {
  const eventTime = 99999;
  const interval = 1000
  const calculateDuration = eventTime => moment.duration(Math.max(eventTime - (Math.floor(Date.now() / 1000)), 0), 'seconds');


  const [duration, setDuration] = useState(calculateDuration(eventTime));
  const timerRef = useRef(0);
  const timerCallback = useCallback(() => {
    setDuration(calculateDuration(eventTime));
  }, [eventTime])

  useEffect(() => {
    timerRef.current = setInterval(timerCallback, interval);

    return () => {
      clearInterval(timerRef.current);
    }
  }, [eventTime]);

  return (
    <RootStyle title='Home | Kamiranime'>
      <Container>
        <Typography variant='h4' sx={{color: theme => theme.palette.primary.dark, pb: 2}}>Mejores ventas <span style={{
          paddingBottom: '5px',
          marginLeft: '1rem',
          borderBottom: '4px solid #DB2E71'
        }}>Hot Sales</span></Typography>
        <Grid container>
          {
            [...Array(10)].map(el => (
              <Grid item xs={12} sm={6} md={3} key={el}>
                <Product/>
              </Grid>
            ))
          }
        </Grid>
      </Container>
      <Box
        sx={{p: 5, my: 4, backgroundImage: `url(${dayOffer})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        {/*<Box*/}
        {/*  component='img'*/}
        {/*  sx={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}*/}
        {/*  src={dayOffer}*/}
        {/*/>*/}
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box
              component='img'
              src={bigHeart}
            />
          </Grid>
          <Grid item xs={12} sm={6} alignSelf='center'>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Box>
                <Typography fontSize='3.5rem' fontWeight='bold'color='primary.dark' align='center'>{duration.days()}</Typography>
                <Typography variant='h1' color='primary.dark' align='center'>Dias</Typography>
              </Box>
              <Box sx={{mx: 2}}>
                <Typography fontSize='3.5rem' fontWeight='bold' color='primary.dark' align='center'>{duration.hours()}</Typography>
                <Typography variant='h1' color='primary.dark' align='center'>Hrs</Typography>
              </Box>
              <Box sx={{mx: 2}}>
                <Typography fontSize='3.5rem' fontWeight='bold' color='primary.dark' align='center'>{duration.minutes()}</Typography>
                <Typography variant='h1' color='primary.dark' align='center'>Min</Typography>
              </Box>
              <Box>
                <Typography fontSize='3.5rem' fontWeight='bold' color='primary.dark' align='center'>{duration.seconds()}</Typography>
                <Typography variant='h1' color='primary.dark' align='center'>Seg</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </RootStyle>
  )
}
