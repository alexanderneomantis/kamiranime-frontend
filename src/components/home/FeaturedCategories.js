import {Box, Grid, Typography} from "@mui/material";
import example from '../../assets/img/thumbnail.png'

export default function FeaturedCategories() {
  return (
    <Grid container spacing={2} justifyContent='center' sx={{ my: 5 }}>
      <Grid item xs={12} sm={6} md={4}>
        <Box sx={{   display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: theme => theme.palette.secondary.main }}>
          <Box sx={{ pl: 5 }}>
            <Typography variant='h3'>Figuras</Typography>
            <Typography>Desde $10.000</Typography>
          </Box>
          <Box
            component='img'
            width={200}
            src={example}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box sx={{   display: 'flex', alignItems: 'center', justifyContent: 'space-between',  backgroundColor: theme => theme.palette.secondary.main }}>
          <Box sx={{ pl: 5 }}>
            <Typography variant='h3'>Peluches</Typography>
            <Typography>Desde $10.000</Typography>
          </Box>
          <Box
            component='img'
            width={200}
            src={example}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box sx={{   display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: theme => theme.palette.secondary.main }}>
          <Box sx={{ pl: 5 }}>
            <Typography variant='h3'>Accesorios</Typography>
            <Typography>Desde $10.000</Typography>
          </Box>
          <Box
            component='img'
            width={200}
            src={example}
          />
        </Box>
      </Grid>
    </Grid>
  )
}
