import {styled} from "@mui/material/styles";
import Page from '../../components/Page'
import Product from "../../components/Product";
import { Container, Grid} from "@mui/material";

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


export default function Figuras() {

  return (
    <RootStyle title='Figuras | Kamiranime'>
      <Container>
        <Grid container>
          {
            [...Array(10)].map((el, i) => (
              <Grid item xs={12} sm={6} md={3} key={i + 12} sx={{display: 'flex', justifyContent: 'center'}}>
                <Product/>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </RootStyle>
  )
}
