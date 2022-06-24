import {useRef} from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
// material
import {useTheme, styled} from "@mui/material/styles";
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
// import mockData from "../../utils/mock-data";
import {CarouselControlsPagingBelow} from "./controls";
import Product from "../products/Product";

// ----------------------------------------------------------------------

// const MOCK_CAROUSELS = [...Array(5)].map((_, index) => ({
//   id: mockData.id(index),
//   title: mockData.text.title(index),
//   image: "/static/mock-images/feeds/feed_1.jpg",
//   description: mockData.text.description(index),
// }));

const RootStyle = styled("div")(({theme}) => ({
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

function CarouselItem({item}) {
  return (
    <Card sx={{mx: 1, mb: 2, maxWidth: 296}}>
      <Product product={item}/>
    </Card>
  );
}

export default function CarouselCenterMode({data}) {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    dots: true,
    slidesToShow: 4,
    autoplay: true,
    // centerMode: true,
    // centerPadding: "60px",
    rtl: Boolean(theme.direction === "rtl"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {slidesToShow: 2},
      },
      {
        breakpoint: 600,
        settings: {slidesToShow: 2},
      },
      {
        breakpoint: 480,
        settings: {slidesToShow: 1},
      },
    ],
    ...CarouselControlsPagingBelow({
      sx: {mt: 3},
    }),
  };

  return (
    <RootStyle>
      <Slider ref={carouselRef} {...settings}>
        {data.map((item) => (
          <CarouselItem key={item._id} item={item}/>
        ))}
      </Slider>
    </RootStyle>
  );
}
