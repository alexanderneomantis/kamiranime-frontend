import {Box, Button, Typography} from "@mui/material";
import useGetBanner from "../../hooks/api/useGetBanner";
import {useNavigate} from 'react-router-dom';
import {urlForBanner} from "../../utils/image";

export default function MainBanner() {
  const {data, loading, error} = useGetBanner()
  const navigate = useNavigate()

  if (loading) return <p>Loading...</p>

  if (!loading && data) {
    return (
      <Box sx={{position: 'relative'}}>
        {
          data.image &&
          <Box
            component='img'
            src={urlForBanner(data.image.asset)}
            alt={data.image.alt}
          />
        }
        <Box sx={{position: 'absolute', bottom: '5%', right: '10%', textAlign: 'end'}}>
          <Typography variant='h1' sx={{mb: 1}} color='primary.dark'>{data.title}</Typography>
          <Typography variant='h4' sx={{mb: 1}} color='#fff'>{data.subtitle}</Typography>
          <Button variant='outlined' onClick={() => navigate(data.url)}>{data.buttonText}</Button>
        </Box>
      </Box>
    )
  }
}
