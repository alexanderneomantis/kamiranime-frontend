import {Box, Button, Grid, Typography} from "@mui/material";
import dayOffer from "../assets/img/dayOffer.png";
import bigHeart from "../assets/img/newHeart.png";
import moment from "moment";
import {useCallback, useEffect, useRef, useState} from "react";

export default function DeyOffer({ eventTime, interval }) {
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
    <Box
      sx={{p: 5, my: 5, backgroundImage: `url(${dayOffer})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box
            component='img'
            src={bigHeart}
          />
        </Grid>
        <Grid item xs={12} sm={6} alignSelf='center'>
          <Typography variant='h2' align='center' color='primary'> Oferta del dia</Typography>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Box>
              <Typography fontSize='3.5rem' fontWeight='bold' color='primary.dark' align='center'>{duration.days()}</Typography>
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Button variant='outlined'>Comprar ahora</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
