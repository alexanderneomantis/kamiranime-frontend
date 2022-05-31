import { useRef } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
// material
import { useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardMedia,
  Divider,
  Typography,
  Rating,
  CardContent,
} from "@mui/material";
// utils
import mockData from "../../utils/mock-data";
import { CarouselControlsPagingBelow } from "./controls";

// ----------------------------------------------------------------------

const MOCK_CAROUSELS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  title: mockData.text.title(index),
  image: "/static/mock-images/feeds/feed_1.jpg",
  description: mockData.text.description(index),
}));

const RootStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  "&:before, &:after": {
    top: 0,
    left: 0,
    zIndex: 8,
    width: 48,
    content: "''",
    height: "100%",
    display: "none",
    position: "absolute",
    [theme.breakpoints.up(480)]: {
      display: "block",
    },
  },
  "&:after": {
    right: 0,
    left: "auto",
    transform: "scaleX(-1)",
  },
  "& .slick-track": {
    display: "inline-flex",
  },
  "& .slick-arrow": {
    display: "none !important",
  },
}));

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
};

function CarouselItem() {
  return (
    <Card sx={{ mx: 2, mb: 3 }}>
      <CardMedia
        component="img"
        image="/static/dummy/dummy-producto.png"
        alt="green iguana"
      />
      <Divider />
      <CardContent>
        <Typography variant="caption" color="primary.dark">
          Torfresma
        </Typography>
        <Typography variant="h6">CUBETEADORA DE SEMI CONGELADO</Typography>

        <Typography variant="caption">Venta</Typography>
        <Typography variant="h6" color="primary.dark" sx={{ mb: 1 }}>
          $5.000.000
        </Typography>

        <Typography variant="caption">Arriendo</Typography>
        <Typography variant="h6" color="primary.dark" sx={{ mb: 1 }}>
          $6.000.000
        </Typography>

        <Box display="flex">
          <Rating name="read-only" value={4} readOnly />
          <Box sx={{ ml: 2 }}>4,0</Box>
        </Box>
      </CardContent>
    </Card>
  );
}

function CarouselItemNews() {
  return (
    <Card sx={{ mx: 2, mb: 3 }}>
    <CardMedia
      component="img"
      image="/static/dummy/dummy-producto.png"
      alt="green iguana"
    />
    <Divider />
    <CardContent>
      <Typography variant="h6">Título Ejemplo con título largo Título Ejemplo con título largo</Typography>
  
      <Typography variant="h6" color="#527701" sx={{ mb: 1 }}>
         Hace 22 horas
      </Typography>
    </CardContent>
  </Card>
  )

}

export default function CarouselCenterMode({ type = 1  }) {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    dots: true,
    slidesToShow: 4,
    // centerMode: true,
    // centerPadding: "60px",
    rtl: Boolean(theme.direction === "rtl"),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, centerPadding: "0" },
      },
    ],
    ...CarouselControlsPagingBelow({
      sx: { mt: 3 },
    }),
  };

  if  (type === 1) {
    return (
      <RootStyle>
        <Slider ref={carouselRef} {...settings}>
          {MOCK_CAROUSELS.map((item) => (
            <CarouselItem key={item.title} item={item} />
          ))}
        </Slider>
      </RootStyle>
    );
  } else {
    return (
      <RootStyle>
        <Slider ref={carouselRef} {...settings}>
          {MOCK_CAROUSELS.map((item) => (
            <CarouselItemNews key={item.title} item={item} />
          ))}
        </Slider>
      </RootStyle>
    );
  }

}
