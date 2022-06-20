import Slider from "react-slick";
import PropTypes from "prop-types";
import { useRef } from "react";
// material
import { useTheme, styled } from "@mui/material/styles";
import { Box } from "@mui/material";
//
import {
  CarouselControlsPaging2,
  CarouselControlsArrowsBasic2,
} from "./controls";
import {urlFor} from "../../utils/image";

// ----------------------------------------------------------------------


const RootStyle = styled("div")({
  position: "relative",
  zIndex: -1,
  "& .slick-track": {
    display: "inline-flex",
  },
});

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
};

function CarouselItem({ item }) {
  console.log(item);

  return (
    <Box
      sx={{ backgroundColor: '#F8EDF6', width: '100%' }}
      component='img'
      alt={item.alt}
      src={urlFor(item)}
    />
  );
}

export default function CarouselBasic3({data}) {
  console.log(data);
  const theme = useTheme();
  const carouselRef = useRef();

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === "rtl"),
    ...CarouselControlsPaging2({
      sx: { mt: 3 },
    }),
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <RootStyle>
      <Slider ref={carouselRef} {...settings}>
        {data.map((item) => (
          <CarouselItem key={item._key} item={item} />
        ))}
      </Slider>
      <CarouselControlsArrowsBasic2
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </RootStyle>
  );
}
