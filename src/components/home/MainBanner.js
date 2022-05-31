import {Box, Button, Typography} from "@mui/material";
import banner from '../../assets/img/mainBanner.jpg'

export default function MainBanner() {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        component='img'
        src={banner}
      />
      <Box sx={{ position: 'absolute', bottom: '5%', right: '10%', textAlign: 'end' }}>
        <Typography variant='h1' sx={{ mb: 1 }} color='primary.dark'>Especial figuras mayo</Typography>
        <Typography variant='h4' sx={{ mb: 1 }} color='#fff'>Todo con 40% dscto</Typography>
        <Button variant='outlined'>Ver productos</Button>
      </Box>
    </Box>
  )
}
