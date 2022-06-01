import BreadCrumb from "../../components/BreadCrumb";
import {styled} from "@mui/material/styles";
import Page from "../../components/Page";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Tab,
  Tabs,
  TextareaAutosize,
  TextField,
  Typography
} from "@mui/material";
import product from '../../assets/img/detail.png';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Product from "../../components/products/Product";
import { useNavigate } from 'react-router-dom'

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

export default function Detail() {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [tabValue, setTabValue] = useState(1);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <RootStyle>
      <BreadCrumb/>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component='img'
              src={product}
            />
          </Grid>
          <Grid item xs={12} md={6} alignSelf='center'>
            <Typography variant='h1' color='primary.dark'> Arumi</Typography>
            <Box sx={{display: 'flex'}}>
              <Typography variant='h3' color='primary'
                          sx={{mr: 5, textDecoration: 'line-through '}}> $10.000</Typography>
              <Typography variant='h3'> $8.000</Typography>
            </Box>
            <Typography variant='body1' sx={{my: 4}}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata
            </Typography>
            <Box>
              <Typography>- 30x20x20</Typography>
              <Typography>- Plastico</Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', my: 3, justifyContent: 'center'}}>
              <IconButton onClick={() => setCount(prevState => --prevState)} color='primary'><RemoveIcon/></IconButton>
              <Typography sx={{width: '50px'}} align='center'>{count}</Typography>
              <IconButton onClick={() => setCount(prevState => ++prevState)} color='primary'><AddIcon/></IconButton>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Button variant='contained' sx={{color: '#fff'}} onClick={() => navigate('/carrito')}>Agregar al carrito</Button>
            </Box>
            <Box sx={{mt: 5}}>
              <Typography>Categoria: Figuras</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{width: '100%'}}>
          <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Tabs value={tabValue} onChange={handleChange} centered aria-label="basic tabs example">
              <Tab label="Descripcion" {...a11yProps(0)} />
              <Tab label="Reviews" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel tabValue={tabValue} index={0}>
            <Box sx={{ my: 5 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem.
            </Box>
          </TabPanel>
          <TabPanel tabValue={tabValue} index={1}>
            <Box sx={{backgroundColor: '#637381', px: 4, py: 2, width: 'fit-content'}}>
              <Typography color='#fff'>Aún no hay reviews</Typography>
            </Box>
            <Typography sx={{mt: 3, mb: 1}} fontWeight='bold'>Sé el primero en hacer una review</Typography>
            <Typography>Tu dirección de email no será publicada. Los campos obligatorios están marcados*.</Typography>

            <Box>
              <Typography sx={{mt: 3, mb: 2}}>Tu Review*</Typography>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={7}
                placeholder="Escribir texto aqui..."
                style={{
                  width: '100%',
                  borderColor: 'lightgray',
                  borderRadius: '15px',
                  padding: '1rem',
                }}
              />

              <Typography sx={{mt: 3, mb: 2}}>Tu nombre *</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label='Nombre de contacto'
                sx={{width: '100%'}}
              />

              <Typography sx={{mt: 3, mb: 2}}>Tu email *</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label='Email de contacto'
                sx={{width: '100%'}}
              />

              <FormControlLabel
                sx={{my: 5}}
                control={<Checkbox/>}
                label={<Typography variant="body1">Guarda mi nombre y página en este buscador para la próxima vez que
                  comente.</Typography>}
              />

            </Box>
            <Button variant='contained' sx={{color: '#fff'}}>Enviar</Button>
          </TabPanel>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography
            variant='h2'
            align='center'
            sx={{width: '100%', borderBottom: '3px solid #F2B1CA', lineHeight: '0.1em', margin: '10px 0 20px'}}
          >
            <span style={{ background: '#fff', padding: '0 15px' }}>Productos Similares</span>
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {
            [...Array(4)].map((el, i) => (
              <Grid item xs={12} sm={6} md={3} key={i + 1}>
                <Product />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </RootStyle>
  )
}

function TabPanel(props) {
  const {children, tabValue, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={tabValue !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {tabValue === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
