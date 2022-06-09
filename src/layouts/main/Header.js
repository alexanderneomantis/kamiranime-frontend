import {Link as RouterLink, useLocation} from "react-router-dom";
// material
import {styled} from "@mui/material/styles";
import {AppBar, Badge, Box, IconButton, Toolbar} from "@mui/material";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
// components
import {MHidden} from "../../components/@material-extend";
import Logo from '../../assets/km-horizontal-logo.svg'
import heart from '../../assets/icons/heart-icon.svg'
import cart from '../../assets/icons/cart.svg'
import search from '../../assets/icons/search.svg'
//
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import navConfig from "./menuConfig";
import {useContext} from "react";
import {Store} from "../../context/StoreContext";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({theme}) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP,
  },
}));

const ToolbarShadowStyle = styled("div")(({theme}) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 8,
    top: 13,
    color: '#fff',
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '6px',
  },
}));

// ----------------------------------------------------------------------

export default function Header() {
  const isOffset = useOffSetTop(1);
  const {pathname} = useLocation();
  const {state: {cart: {cartItems}}} = useContext(Store)
  const isHome = pathname === "/";

  return (
    <AppBar sx={{boxShadow: 0, bgcolor: "transparent"}}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: "background.default",
            height: {md: APP_BAR_DESKTOP - 20},
          }),
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
          }}
        >
          <RouterLink to="/">
            {/*<Logo/>*/}
            <img src={Logo} width={200} alt="kamiranime logo"/>
          </RouterLink>

          {/*<Box sx={{flexGrow: 1}}/>*/}

          <MHidden width="mdDown">
            <MenuDesktop
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
            />
          </MHidden>

          <Box>
            <RouterLink to='/buscar'>
              <IconButton aria-label="Lupa de busqueda">
                <img width={25} height={25} src={search} alt="search icon"/>
              </IconButton>
            </RouterLink>

            <RouterLink to='/carrito'>
              <StyledBadge badgeContent={cartItems.length} color='primary'>
                <IconButton aria-label="carrito de compras">
                  <img width={25} height={25} src={cart} alt="cart icon"/>
                </IconButton>
              </StyledBadge>
            </RouterLink>

            <RouterLink to='/favoritos'>
              <IconButton aria-label="vista de favoritos">
                <img width={25} height={25} src={heart} alt="fav icon"/>
              </IconButton>
            </RouterLink>
          </Box>

          <MHidden width="mdUp">
            <MenuMobile
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
            />
          </MHidden>
        </Box>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle/>}
    </AppBar>
  );
}
