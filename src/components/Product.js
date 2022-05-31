import {Box, IconButton, Paper, Typography} from "@mui/material";
import thumbnail from '../assets/img/thumbnail.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Product({product = {}}) {
  return (
    <Paper sx={{ maxWidth: '280px' }}>
      <Box
        component="img"
        src={thumbnail}
        alt="Paella dish"
      />
      <Box sx={{ p: 3 }}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1}}>
          <Typography variant='body1' fontWeight='bold'>Arumi figura small</Typography>
          <IconButton>
            <FavoriteBorderIcon/>
          </IconButton>
        </Box>
        <Box sx={{display: 'flex'}}>
          <Typography variant='body1' sx={{ textDecoration: 'line-through' }} fontWeight='bold' color='primary.main'>$10.000</Typography>
          <Typography sx={{mx: 2}} fontWeight='bold' variant='body1'>$8.000</Typography>
        </Box>
      </Box>
    </Paper>
  )
}
