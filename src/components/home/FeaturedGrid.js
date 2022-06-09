import {Grid} from "@mui/material";
import Product from "../products/Product";
import useGetFeatured from "../../hooks/api/useGetFeatured";

export default function FeaturedGrid() {
  const { data, loading } = useGetFeatured()

  return (
    <Grid container spacing={2} sx={{ my: 5, py: 5 }}>
      {loading && <p>loading...</p>}
      {
        !loading &&data && data.length > 0 &&data.map((el) => (
          <Grid item xs={12} sm={6} md={3} key={el._id} sx={{display: 'flex', justifyContent: 'center'}}>
            <Product product={el} />
          </Grid>
        ))
      }
    </Grid>
  )
}
