// import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Typography, List, ListItem } from "@mui/material";
//
import Logo from "../../assets/km-vertical-logo.svg";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: '#FAF2FF',
  // borderTop: "1rem solid " + grey[100],
  borderBottom: "1rem solid " + theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    // borderTop: "3rem solid " + grey[100],
  },
}));


export default function Footer() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Grid
            item
            xs={6}
            md={3}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box component='img' src={Logo} alt="kamiranime logo"/>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", alignItems: "start", pr: 1 }}
          >
          <List>
            <ListItem>
              <Typography variant='h4'  color='primary.dark'>Sobre nosotros</Typography>
            </ListItem>
            <ListItem><Typography variant='body1'>Contactanos</Typography></ListItem>
            <ListItem><Typography variant='body1'>Kamiranime</Typography></ListItem>
          </List>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", alignItems: "start", pr: 1 }}
          >
            <List>
              <ListItem>
                <Typography variant='h4'  color='primary.dark'>Ayuda</Typography>
              </ListItem>
              <ListItem><Typography variant='body1'>Preguntas frecuentes</Typography></ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", alignItems: "start", pr: 1 }}
          >
            <List>
              <ListItem>
                <Typography variant='h4'  color='primary.dark'>Siguenos</Typography>
              </ListItem>
              <ListItem><Typography variant='body1'>Tiktok</Typography></ListItem>
              <ListItem><Typography variant='body1'>Instagram</Typography></ListItem>
              <ListItem><Typography variant='body1'>Facebook</Typography></ListItem>
            </List>
          </Grid>

        </Grid>
      </Container>
    </RootStyle>
  );
}
