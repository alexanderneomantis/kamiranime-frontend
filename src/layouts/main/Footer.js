import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Container, Divider, Grid, Typography, Link } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
//
import Logo from "../../assets/km-vertical-logo.svg";
import SvgIconStyle from "../../components/SvgIconStyle";
import MHidden from "../../components/@material-extend/MHidden";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
  // borderTop: "1rem solid " + grey[100],
  borderBottom: "1rem solid " + theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    // borderTop: "3rem solid " + grey[100],
  },
}));

// como-funciona-la-plataforma

function Links() {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Typography variant="caption" sx={{ fontFamily: "Din-STD-Engschrift" }}>
          POLÍTICAS DE PRIVACIDAD
        </Typography>
      </Grid>

      <Grid item xs={12} md={4} sx={{ my: { xs: 1, md: 0 } }}>
        <Typography variant="caption" sx={{ fontFamily: "Din-STD-Engschrift" }}>
          CONDICIONES DE COMPRA
        </Typography>
      </Grid>

      <Grid item xs={12} md={4}>
        <Typography variant="caption" sx={{ fontFamily: "Din-STD-Engschrift" }}>
          TÉRMINOS LEGALES
        </Typography>
      </Grid>
    </Grid>
  );
}

// ----------------------------------------------------------------------

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
            <Box component='img' src={Logo} alt="kamiranime logo" sx={{
              height: { xs: 70, sm: 100 },
              width: { xs: 70, sm: 100 },
              display: "block",
              mx: 0,
              mb: { xs: 2, md: 0 },
            }}/>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            sx={{ display: "flex", alignItems: "center", pr: 1 }}
          >
            <Box
              component='img'
              src={Logo}
              sx={{
                height: { xs: 42, sm: 62 },
                width: { xs: 130, sm: 190 },
                display: "block",
                ml: { xs: "auto", md: 0 },
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ mt: { xs: 2, md: 0 } }}>
            <Link
              component={RouterLink}
              to="/como-funciona-la-plataforma"
              sx={{ color: "#000", "&:hover": { opacity: 0.7 }, cursor: "pointer", }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  mb: 2,
                  mx: 2,
                  "&:hover": { opacity: 0.7 },
                }}
              >
                <ExpandCircleDownIcon
                  sx={{ transform: "rotate(-90deg)", mr: 1 }}
                  color="primary"
                />
                <Typography variant="caption">
                  ¿Cómo funciona la plataforma?
                </Typography>
              </Box>
            </Link>

            <MHidden width="mdUp">
              <Divider />
              <Box m={2} textAlign="left">
                <Links />
              </Box>
            </MHidden>

            <Divider />

            <Box m={2} textAlign="left">
              <Grid container>
                <Grid item xs={6} md={4}>
                  <Typography variant="caption">Teléfono</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      mt: "3px",
                      "&:hover": { opacity: 0.7 },
                    }}
                  >
                    <SvgIconStyle
                      src={`/static/icons/icon-phone.svg`}
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="caption">+56 2 0000 000</Typography>
                  </Box>
                </Grid>

                <Grid item xs={6} md={4}>
                  <Typography variant="caption">Dirección</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      mt: "3px",
                      "&:hover": { opacity: 0.7 },
                    }}
                  >
                    <SvgIconStyle
                      src={`/static/icons/icon-map.svg`}
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="caption">
                      Psje. Nombre ejemplo
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4} sx={{ mt: { xs: 2, md: 0 } }}>
                  <Typography variant="caption">Encuéntranos en</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      mt: "3px",
                      "&:hover": { opacity: 0.7 },
                    }}
                  >
                    <SvgIconStyle
                      src={`/static/icons/icon-linkedin.svg`}
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="caption">/gotec</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <MHidden width="mdDown">
              <Divider />
              <Box mt={2} mx={2}>
                <Links />
              </Box>
            </MHidden>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
