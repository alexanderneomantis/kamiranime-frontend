import {styled} from "@mui/material/styles";
import Page from '../../components/Page'
import Product from "../../components/products/Product";
import {Box, Container, Grid} from "@mui/material";
import SortDesktop from "../../components/products/SortDektop";
import SortMobile from "../../components/products/SortMobile";
import FiltersMobile from "../../components/products/FiltersMobile";
import FiltersDesktop from "../../components/products/FiltersDesktop";
import {useState} from "react";
import BreadCrumb from "../../components/BreadCrumb";
import useGetProductsByCategory from "../../hooks/api/useGetProductsByCategory";

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


export default function Lamparas() {
  const [drawer, setDrawer] = useState(false);
  const {data, loading} = useGetProductsByCategory('lamparas');

  return (
    <RootStyle title='Figuras | Kamiranime'>
      <BreadCrumb />
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}>
            <FiltersDesktop/>
            <FiltersMobile setDrawer={setDrawer} drawer={drawer}/>
          </Grid>
          <Grid item xs={12} md={9}>
            <SortDesktop/>
            <SortMobile setDrawer={setDrawer}/>

            <Box sx={{p: 3}}>
              {loading && <p>Loading...</p>}
              {
                !loading && data.length > 0 &&
                <Grid container spacing={3}>
                  {
                    data.map((el) => (
                      <Grid item xs={12} sm={6} md={3} key={el._id} sx={{display: 'flex', justifyContent: 'center'}}>
                        <Product product={el}/>
                      </Grid>
                    ))
                  }</Grid>
              }
            </Box>
          </Grid>

        </Grid>
      </Container>
    </RootStyle>
  )
}
