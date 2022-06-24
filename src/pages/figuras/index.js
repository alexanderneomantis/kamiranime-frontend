import {styled} from "@mui/material/styles";
import Page from '../../components/Page'
import Product from "../../components/products/Product";
import {Box, Container, Grid, Pagination} from "@mui/material";
import SortDesktop from "../../components/products/SortDektop";
import SortMobile from "../../components/products/SortMobile";
import FiltersMobile from "../../components/products/FiltersMobile";
import FiltersDesktop from "../../components/products/FiltersDesktop";
import {useEffect, useState} from "react";
import BreadCrumb from "../../components/BreadCrumb";
import useGetProductsByCategory from "../../hooks/api/useGetProductsByCategory";
import groq from "groq";
import {useLocation} from 'react-router-dom';

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
  const {pathname} = useLocation()
  const category = pathname.replace('/categorias/', '')
  const [drawer, setDrawer] = useState(false);
  const {data, loading, search} = useGetProductsByCategory(category);
  const [range, setRange] = useState([0, 20000]);
  const [slice, setSlice] = useState([0, 12]);
  const [page, setPage] = useState(1)
  const [productsPerPage] = useState(12)

  const [filters, setFilters] = useState({
    isNew: true,
    isInStock: true,
    order: 'asc',
    product: ''
  });

  const bothTrueQuery = groq`
    *[_type == 'product' 
    && category->title ==  $category  
    && isNew == ${filters.isNew} 
    && isInStock == ${filters.isInStock}
    && price >= ${range[0]} 
    && title match '*${filters.product}'
    && price <= ${range[1]} ] 
    | order(price ${filters.order})
    [${slice[0]}...${slice[1]}] {
    title,
    "slug": slug.current,
    price,
    lastPrice,
    images,
    isNew,
    isFeatured,
    "category": category->title,
    "length": count(*[_type == 'product'  && category->title ==  $category])
}
`
  const allQuery = groq`
    *[_type == 'product' 
    && category->title ==  $category  
    && price >= ${range[0]} 
    && title match '*${filters.product}'
    && price <= ${range[1]} ] 
    | order(price ${filters.order})
    [${slice[0]}...${slice[1]}] {
    title,
    "slug": slug.current,
    price,
    lastPrice,
    images,
    isNew,
    isFeatured,
    "category": category->title,
    "length": count(*[_type == 'product'  && category->title ==  $category])
}
`
  const notNewQuery = groq`
    *[_type == 'product' 
    && category->title ==  $category  
    && isInStock == ${filters.isInStock}
    && price >= ${range[0]} 
    && title match '*${filters.product}'
    && price <= ${range[1]} ] 
    | order(price ${filters.order})
    [${slice[0]}...${slice[1]}] {
    title,
    "slug": slug.current,
    price,
    lastPrice,
    images,
    isNew,
    isFeatured,
    "category": category->title,
    "length": count(*[_type == 'product'  && category->title ==  $category])
}
`
  const notInStockQuery = groq`
    *[_type == 'product' 
    && category->title ==  $category  
    && isNew == ${filters.isNew}
    && price >= ${range[0]} 
    && title match '*${filters.product}'
    && price <= ${range[1]} ] 
    | order(price ${filters.order})
    [${slice[0]}...${slice[1]}] {
    title,
    "slug": slug.current,
    price,
    lastPrice,
    images,
    isNew,
    isFeatured,
    "category": category->title,
    "length": count(*[_type == 'product'  && category->title ==  $category])
}
`

  useEffect(() => {
    if (filters.isNew && filters.isInStock) {
      search(bothTrueQuery);
    } else if (filters.isNew && !filters.isInStock) {
      search(notInStockQuery)
    } else if (!filters.isNew && filters.isInStock) {
      search(notNewQuery)
    } else {
      search(allQuery)
    }
  }, [filters, range, slice, pathname])

  function handlePaginationChange(event, value) {
    setPage(value);
  }

  useEffect(() => {
    if (page <= 1) {
      setSlice([0, 12])
    } else {
      setSlice([slice[1], slice[1] * page])
    }
  }, [page]);

  useEffect(() => {
    setSlice([0, 12])
    setPage(1);
  }, [pathname]);

  useEffect(() => {
    return () => {
      setPage(1);
    }
  }, [])

  return (
    <RootStyle title='Figuras | Kamiranime'>
      <BreadCrumb/>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}>
            <FiltersDesktop category={category} setFilters={setFilters} filters={filters} range={range}
                            setRange={setRange}/>
            <FiltersMobile  category={category} setFilters={setFilters} filters={filters} range={range}
                            setRange={setRange} setDrawer={setDrawer} drawer={drawer}/>
          </Grid>
          <Grid item xs={12} md={9} sx={{position: 'relative'}}>
            <SortDesktop filters={filters} setFilters={setFilters}/>
            <SortMobile setDrawer={setDrawer}/>

            <Box sx={{p: 3}}>
              {loading && <p>Loading...</p>}
              {
                !loading && data.length > 0 &&
                <Grid container spacing={3}>
                  {
                    data.map((el) => (
                      <Grid item xs={12} sm={6} md={4} key={el._id} sx={{display: 'flex', justifyContent: 'center'}}>
                        <Product product={el}/>
                      </Grid>
                    ))
                  }</Grid>
              }
            </Box>
            <Box sx={{position: 'absolute', bottom: 10, right: 10}}>
              <Pagination count={data && data.length > 0 && Math.ceil(data[0].length / productsPerPage)} page={page}
                          onChange={handlePaginationChange} color="primary"/>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  )
}
