import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import BreadCrumb from "../components/BreadCrumb";
import {useState} from 'react';
import {
  Container, Select, Grid,
  Table,
  Button,
  MenuItem,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box, TextField
} from "@mui/material";
import CartProduct from "../components/products/CartProduct";
import {MHidden} from "../components/@material-extend";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

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

const StyledCell = styled(TableCell)(({theme}) => ({
  backgroundColor: '#F8EDF6'
}))


export default function Cart() {
  const [checkoutValues, setCheckoutValues] = useState({
    city: 0,
    region: 0,
    code: '',
    coupon: '',
  })

  function handleChange(val, name) {
    setCheckoutValues(prevState => ({
      ...prevState,
      [name]: val
    }))
  }


  return (
    <RootStyle title='Carrito de compras | Kamiranime'>
      <BreadCrumb/>
      <Container>
        <Typography sx={{my: 5}} variant='h1' color='primary.dark'>Los productos de tu carro</Typography>

        <MHidden width='mdDown'>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledCell>Imagen</StyledCell>
                  <StyledCell>Nombre de producto</StyledCell>
                  <StyledCell>Cantidad</StyledCell>
                  <StyledCell>Precio</StyledCell>
                  <StyledCell>Accion</StyledCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  [...Array(4)].map((item, i) => (
                    <TableRow key={i + 1}>
                      <CartProduct/>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </MHidden>

        <MHidden width='mdUp'>
          {
            [...Array(4)].map((el, i) => (
              <CartProduct key={i + 1}/>
            ))
          }
        </MHidden>
        <Grid container spacing={2} sx={{ mt: 5}}>
          <Grid item xs={12} md={4} >
            <Box sx={{backgroundColor: '#F4F4F4', p: 4, height: '100%'}}>
              <Typography variant='h4' sx={{mb: 2}}>Estimado de envío</Typography>
              <Typography variant='body1' sx={{mb: 2}}>Ingresa tu destino para tener un aproximado del envío
                correspondiente.</Typography>

              <Typography>Ciudad</Typography>
              <Select
                labelId="city"
                id="cityid"
                value={checkoutValues.city}
                sx={{mb: 2, width: '100%', backgroundColor: '#fff'}}
                onChange={e => handleChange(e.target.value, 'city')}
              >
                <MenuItem value={0}>Seleccionar Ciudad</MenuItem>
                <MenuItem value='ciudad 1'>ciudad 1</MenuItem>
                <MenuItem value='ciudad 2'>ciudad 2</MenuItem>
                <MenuItem value='ciudad 3'>ciudad 3</MenuItem>
              </Select>

              <Typography>Región</Typography>
              <Select
                labelId="region"
                id="regionid"
                value={checkoutValues.region}
                sx={{mb: 2, width: '100%', backgroundColor: '#fff'}}
                onChange={e => handleChange(e.target.value, 'region')}
              >
                <MenuItem value={0}>Seleccionar Region</MenuItem>
                <MenuItem value='region 1'>region 1</MenuItem>
                <MenuItem value='region 2'>region 2</MenuItem>
                <MenuItem value='region 3'>region 3</MenuItem>
              </Select>

              <Typography>Codigo postal</Typography>
              <TextField
                fullWidth
                type="text"
                value={checkoutValues.code}
                size="small"
                onChange={e => handleChange(e.target.value, 'code')}
                placeholder="000000000"
                sx={{mb: 2, backgroundColor: '#fff'}}
              />

            </Box>
          </Grid>
          <Grid item xs={12} md={4} >
            <Box sx={{backgroundColor: '#F4F4F4', p: 4, height: '100%'}}>
              <Typography variant='h4' sx={{mb: 2}}>Usar cupon de descuento</Typography>
              <Typography variant='body1' sx={{mb: 2}}>Si tienes algún cupón de descuento ingresado acá.</Typography>

              <Typography>Cupon de descuento</Typography>
              <TextField
                fullWidth
                type="text"
                value={checkoutValues.coupon}
                size="small"
                onChange={e => handleChange(e.target.value, 'coupon')}
                placeholder="000000000"
                sx={{mb: 2, backgroundColor: '#fff'}}
              />

            </Box>
          </Grid>
          <Grid item xs={12} md={4} >
            <Box sx={{backgroundColor: '#F4F4F4', p: 4, height: '100%'}}>
              <Typography variant='h4' sx={{mb: 2}}>Carrito</Typography>
              <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='body1' >total productos</Typography>
                <Typography variant='h6' >$13.000</Typography>
              </Box>
              <Box mb={5}>
                <Typography>Total envió</Typography>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <FormControlLabel
                    control={<Checkbox/>}
                    label={<Typography variant="body1">Standar </Typography>}
                  />
                  <Typography> $2.000</Typography>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <FormControlLabel
                    control={<Checkbox/>}
                    label={<Typography variant="body1">Express</Typography>}
                  />
                  <Typography> $5.000</Typography>
                </Box>
              </Box>

              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography variant='h4' color='primary'>Total carrito</Typography>
                <Typography variant='h3' color='primary'>$18.000</Typography>
              </Box>

              <Button variant='contained' sx={{ color: '#fff', width: '100%', mt: 3 }}>
                Comprar
              </Button>

            </Box>
          </Grid>

        </Grid>
      </Container>
    </RootStyle>
  )
}
