import {styled} from "@mui/material/styles";
import Page from '../components/Page'
import Product from "../components/Product";
import { Container, Grid, Typography} from "@mui/material";
import DeyOffer from "../components/DayOffer";
import HowWeWork from "../components/home/HowWeWork";
import FeaturedCategories from "../components/home/FeaturedCategories";
import MainBanner from "../components/home/MainBanner";

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

  return (
    <RootStyle title='Home | Kamiranime'>
      <MainBanner />
      <Container>
        <FeaturedCategories/>
        <Typography variant='h4' sx={{color: theme => theme.palette.primary.dark, pb: 2}}>Mejores ventas <span style={{
          paddingBottom: '5px',
          marginLeft: '1rem',
          borderBottom: '4px solid #DB2E71'
        }}>Hot Sales</span></Typography>
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
      <DeyOffer eventTime='9999999999' interval='1000'/>
      <HowWeWork/>
    </RootStyle>
  )
}
