import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarosel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-2 flex">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {/* Right Button */}
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "45%",
              right: "-2rem",
              transform: "translateY(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            color="primary"
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {/* Left Button */}
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50"
            sx={{
              position: "absolute",
              top: "45%",
              left: "-2rem",
              transform: "translateY(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            color="primary"
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
