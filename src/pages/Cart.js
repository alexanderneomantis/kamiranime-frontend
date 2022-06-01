import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import BreadCrumb from "../components/BreadCrumb";
import {
  Container, IconButton,
  Link, MenuItem, Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import CartProduct from "../components/products/CartProduct";
import {MHidden} from "../components/@material-extend";

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
                      <CartProduct />
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
              <CartProduct key={i + 1} />
            ))
          }
        </MHidden>
      </Container>
    </RootStyle>
  )
}
