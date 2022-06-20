// material
import {grey} from "@mui/material/colors";
import {Slider, styled, TextField, IconButton} from "@mui/material";
import {Box, Typography} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useState, useEffect} from "react";
import useGetProductsByCategory from "../../hooks/api/useGetProductsByCategory";
import groq from "groq";

// ----------------------------------------------------------------------

const BoxStyle = styled(Box)(() => ({
  padding: "14px 16px 8px 16px",
  display: 'flex'
}));

const AccordionStyle = styled(Accordion)(() => ({
  borderBottom: "solid",
  borderWidth: 2,
  borderColor: grey[100],
  borderRadius: "0 !important",
  "&::before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: 0,
    boxShadow: "none",
  },
  "& .MuiAccordionSummary-content": {
    margin: "15px 0 11px 0 !important",
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: "15px 0  11px 0 !important",
  },
  "& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded": {
    minHeight: "48px",
  },
  "& .MuiAccordionDetails-root": {
    padding: "0px 16px 16px",
  },
}));

// ----------------------------------------------------------------------

export default function FiltersDesktop({ category, range, setRange, filters, setFilters }) {
  const {data, loading, search} = useGetProductsByCategory(category);
  const [ product, setProduct ] = useState('')

  const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "")

  const query = groq`*[_type == 'product' && category->title ==  $category]`

  console.log('data', data);
  console.log('loading', loading);


  useEffect(() => {
    search(query)
  }, [])


  const handleChange = (event, newValue) => {
    setRange(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <Box sx={{display: {xs: "none", md: "block"}}}>
      <BoxStyle>
        <TextField
          id="search"
          label="Buscar…"
          variant="outlined"
          size="small"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          fullWidth
        />
        <IconButton onClick={() => setFilters(prevState => ({...prevState, product: product}))}>
          <SearchIcon style={{ color: '#DB2E71' }} />
        </IconButton>
      </BoxStyle>

      <AccordionStyle defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Clasifica por</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox/>}
              label={<Typography variant="body1">En venta (10)</Typography>}
            />
            <FormControlLabel
              control={<Checkbox checked={filters.isNew} onChange={e => setFilters(prevState => ({...prevState, isNew: e.target.checked}))}/>}
              label={<Typography variant="body1">Nuevo ({data && data.length > 0 && data.filter(x => x.isNew).length})</Typography>}
            />
            <FormControlLabel
              control={<Checkbox checked={filters.isInStock} onChange={e => setFilters(prevState => ({...prevState, isInStock: e.target.checked}))}/>}
              label={<Typography variant="body1">En Stock ({data && data.length > 0 && data.filter(x => x.isInStock).length})</Typography>}
            />
          </FormGroup>
        </AccordionDetails>
      </AccordionStyle>

      <Box sx={{p: 5}}>
        <Typography variant='h6'>Filtrar por precio</Typography>
        <Slider
          getAriaLabel={() => 'price slider'}
          value={range}
          size='large'
          max={20000}
          min={0}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <small>$ {addCommas(removeNonNumeric(range[0]))}</small>
          <small>$ {addCommas(removeNonNumeric(range[1]))}</small>
        </Box>
      </Box>

      <AccordionStyle defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox/>}
              label={<Typography variant="body1">Verde (4)</Typography>}
            />
            <FormControlLabel
              control={<Checkbox/>}
              label={
                <Typography variant="body1">Crema (10)</Typography>
              }
            />
            <FormControlLabel
              control={<Checkbox/>}
              label={<Typography variant="body1">Celeste (6)</Typography>}
            />
          </FormGroup>
        </AccordionDetails>
      </AccordionStyle>
    </Box>
  );
}
