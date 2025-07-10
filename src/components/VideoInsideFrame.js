import { Box } from "@mui/material";
import iphone_frame from "../assets/iphone_frame.svg";
import { useRef, useEffect, useState } from "react";

const VideoInsidePhone = ({ video }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentVideo = videoRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (currentVideo) {
      observer.observe(currentVideo);
    }
    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "20vw", // Responsive width
        height: "42vw", // Maintain aspect ratio similar to iPhone frame
        maxWidth: "90vw",
        maxHeight: "80vh",
        minWidth: "200px", // fallback for very small screens
        minHeight: "400px",
        margin: "auto",
      }}
    >
      {/* Video Element */}
      <Box
        component="video"
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "2vw",
          zIndex: 1,
          padding: "5%",
        }}
      />

      {/* Phone Frame PNG */}
      <Box
        component="img"
        src={iphone_frame}
        alt="Phone Frame"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default VideoInsidePhone;
