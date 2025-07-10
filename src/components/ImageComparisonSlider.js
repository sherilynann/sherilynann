import React, { useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useIsMobileScreen } from "./CommonFunctions";

const ImageComparisonSlider = ({ oldImage, newImage }) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50); // percentage

  const handleDrag = (e) => {
    if (!containerRef.current) return;

    const bounds = containerRef.current.getBoundingClientRect();
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const percent = ((x - bounds.left) / bounds.width) * 100;
    setPosition(Math.max(0, Math.min(100, percent)));
  };

  const startDrag = () => {
    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", handleDrag);
    window.addEventListener("touchend", stopDrag);
  };

  const stopDrag = () => {
    window.removeEventListener("mousemove", handleDrag);
    window.removeEventListener("mouseup", stopDrag);
    window.removeEventListener("touchmove", handleDrag);
    window.removeEventListener("touchend", stopDrag);
  };
  const isMobile = useIsMobileScreen();
  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: "100%",
        height: isMobile?"20vh":"75vh",
        overflow: "hidden",
        userSelect: "none",
        cursor: "ew-resize",
      }}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      {/* New Image (background) */}
      <Box
        component="img"
        src={newImage}
        alt="New"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Old Image (clipped) */}
      <Box
        component="img"
        src={oldImage}
        alt="Old"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          transition: "clip-path 0.05s",
        }}
      />

      {/* Draggable Vertical Bar */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${position}%`,
          inlineSize: isMobile ? "0.8vw" : "0.21vw", // replaces width
          backgroundColor: "#FE441D",
          zIndex: 2,
          transform: "translateX(-50%)",
        }}
      >
        {/* Handle */}
        <Box
          sx={{
            inlineSize: isMobile ? "4vw" : "1vw", // replaces width
            blockSize: isMobile ? "4vw" : "1vw", // replaces height
            backgroundColor: "#FE441D",
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: isMobile ? "0 0 0.5vw rgba(0,0,0,0.4)" : "0 0 0.26vw rgba(0,0,0,0.4)",
            zIndex: 3,
          }}
        />
      </Box>

      {/* Labels */}
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          insetBlockEnd: isMobile ? "2vh" : "2.2vh", // replaces bottom
          insetInlineStart: isMobile ? "2vw" : "1vw", // replaces left
          backgroundColor: "#FE441D",
          color: "#fff",
          px: isMobile ? "2vw" : "0.8vw",
          py: isMobile ? "1vh" : "0.4vh",
          borderRadius: "0.5vw",
          fontWeight: "bold",
          fontSize: isMobile ? "2.5vw" : "0.7vw",
        }}
      >
        OLD SCREEN
      </Typography>

      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          insetBlockEnd: isMobile ? "2vh" : "2.2vh", // replaces bottom
          insetInlineEnd: isMobile ? "2vw" : "1vw", // replaces right
          backgroundColor: "#FE441D",
          color: "#fff",
          px: isMobile ? "2vw" : "0.8vw",
          py: isMobile ? "1vh" : "0.4vh",
          borderRadius: "0.5vw",
          fontWeight: "bold",
          fontSize: isMobile ? "2.5vw" : "0.7vw",
        }}
      >
        ✨ NEW SCREEN ✨
      </Typography>

      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          insetBlockStart: isMobile ? "-4vh" : "-2.5vh", // replaces top
          left: "50%",
          transform: "translateX(-50%)",
          color: "#FE441D",
          fontWeight: "bold",
          fontSize: isMobile ? "3vw" : "0.9vw",
        }}
      >
        Slide to see the difference
      </Typography>
    </Box>
  );
};

export default ImageComparisonSlider;
