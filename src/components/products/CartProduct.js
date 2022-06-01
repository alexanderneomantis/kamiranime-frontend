import {Box, IconButton, Paper, TableCell, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useNavigate} from 'react-router-dom';
import thumbnail from '../../assets/img/thumbnail.png'
import {useState} from 'react';
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {MHidden} from "../@material-extend";

export default function CartProduct() {
  const navigate = useNavigate()
  const [count, setCount] = useState(1)

  // function updateCartHandler(item, value) {
  //   setCount(value)
  //   // ...
  // }

  function removeItemHandler(item) {
    // ...
  }

  return (
    <>
      <MHidden width='mdDown'>
        <TableCell>
          <Box onClick={() => navigate('/figuras/detalle-002')} sx={{ cursor: 'pointer' }}>
            <Box component='img' src={thumbnail} alt='Arumi figura small' width={50} height={50}/>
          </Box>
        </TableCell>
        <TableCell>
          <Typography sx={{ cursor: 'pointer' }} onClick={() => navigate('/figuras/detalle-002')}>Arumi figura small</Typography>
        </TableCell>
        <TableCell>
          <Box sx={{display: 'flex', alignItems: 'center', my: 3, justifyContent: 'center', width: 'fit-content'}}>
            <IconButton onClick={() => setCount(prevState => --prevState)} color='primary'><RemoveIcon/></IconButton>
            <Typography sx={{width: '50px'}} align='center'>{count}</Typography>
            <IconButton onClick={() => setCount(prevState => ++prevState)} color='primary'><AddIcon/></IconButton>
          </Box>
        </TableCell>
        <TableCell>
          <Typography>$8.000</Typography>
        </TableCell>
        <TableCell>
          <IconButton variant='contained' color='primary' onClick={() => removeItemHandler({})}>
            <DeleteIcon/>
          </IconButton>
        </TableCell>
      </MHidden>
      <MHidden width='mdUp'>
        <Paper elevation={2} sx={{textAlign: 'center', my: 2, py: 2}}>
          <Box onClick={() => navigate('/figuras/detalle-002')} style={{display: 'flex', justifyContent: 'center', cursor: 'pointer'}}>
            <Box component='img' src={thumbnail} alt='Arumi figura small'/>
          </Box>
          <Typography sx={{ cursor: 'pointer' }} variant='h6' onClick={() => navigate('/figuras/detalle-002')}>Arumi figura small</Typography>
          <Box sx={{display: 'flex', alignItems: 'center', my: 3, justifyContent: 'center'}}>
            <IconButton onClick={() => setCount(prevState => --prevState)} color='primary'><RemoveIcon/></IconButton>
            <Typography sx={{width: '50px'}} align='center'>{count}</Typography>
            <IconButton onClick={() => setCount(prevState => ++prevState)} color='primary'><AddIcon/></IconButton>
          </Box>
          <Typography variant='h3'>$8.000</Typography>
          <IconButton variant='contained' color='primary' onClick={() => removeItemHandler({})}>
            <DeleteIcon/>
          </IconButton>
        </Paper>
      </MHidden>
    </>
  )
}
