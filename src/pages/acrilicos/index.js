import {styled} from "@mui/material/styles";
import Page from '../../components/Page'
import Product from "../../components/Product";
import {Box, Container, Grid, Typography} from "@mui/material";
import SortDesktop from "../../components/products/SortDektop";
import SortMobile from "../../components/products/SortMobile";
import FiltersMobile from "../../components/products/FiltersMobile";
import FiltersDesktop from "../../components/products/FiltersDesktop";
import {useState} from "react";
import BreadCrumb from "../../components/BreadCrumb";

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
  const [drawer, setDrawer] = useState(false);

  return (
    <RootStyle title='Figuras | Kamiranime'>
      <BreadCrumb />
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}>
            <FiltersDesktop />
            <FiltersMobile setDrawer={setDrawer} drawer={drawer} />
          </Grid>
          <Grid item xs={12} md={9}>
            <SortDesktop />
            <SortMobile setDrawer={setDrawer} />

            <Box sx={{ p: 3 }}>
              <Grid container spacing={3}>
                {
                  [...Array(10)].map((el, i) => (
                    <Grid item xs={12} sm={6} md={3} key={i + 12} sx={{display: 'flex', justifyContent: 'center'}}>
                      <Product/>
                    </Grid>
                  ))
                }</Grid>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </RootStyle>
  )
}
