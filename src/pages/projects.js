import { Box, Button } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useIsMobileScreen } from "../components/CommonFunctions";

const caseStudies = [
  "", // represents /projects (case-study-1)
  "case-study-1",
  "case-study-2",
  "case-study-3",
  // Add more keys here for future case studies, e.g. "case-study-4"
];

const Projects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useIsMobileScreen(768);

  useEffect(() => {
    // Find the current case study index based on the path
    let idx = 0;
    if (location.pathname === "/projects") {
      idx = 0;
    } else {
      idx = caseStudies.findIndex(
        (key) => key && location.pathname.endsWith(key)
      );
      if (idx === -1) idx = 0;
    }
    setCurrentIndex(idx);
  }, [location.pathname]);

  const showPrev = currentIndex > 1; // index 2 and above (case-study-2, case-study-3, ...)
  const showNext = currentIndex < caseStudies.length - 1 && currentIndex >= 0;

  const handlePrev = () => {
    if (showPrev) {
      const prevKey = caseStudies[currentIndex - 1];
      navigate(prevKey ? `/projects/${prevKey}` : "/projects");
    }
  };

  const handleNext = () => {
    if (showNext) {
      const nextKey = caseStudies[currentIndex + 1];
      navigate(nextKey ? `/projects/${nextKey}` : "/projects");
    }
  };

  return (
    <Box>
      {/* Conditionally render navigation buttons */}
      <Outlet />
      <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
        {/* Previous button always on the left */}
        {showPrev ? (
          <Button
            onClick={handlePrev}
            sx={{
              backgroundColor: "#FE441D",
              blockSize: "6vh",
              borderRadius: 0, // rectangular
              textTransform: "none",
              boxShadow: "0.26vw 0.26vw 0 rgba(0, 0, 0)",
              marginY: "2vw",
              height: isMobile ? "min-content" : "auto",
            }}
          >
            <Box
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "700",
                fontSize: isMobile ? "3vw" : "1vw",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: 8 }}>◀</span>{" "}
              {isMobile ? "Prev" : "Previous Case Study"}
            </Box>
          </Button>
        ) : (
          <Box sx={{ inlineSize: "30%" }} />
        )}
        {/* Next button always on the right */}
        {showNext ? (
          <Button
            onClick={handleNext}
            sx={{
              backgroundColor: "#FE441D",
              blockSize: "6vh",
              borderRadius: 0, // rectangular
              textTransform: "none",
              boxShadow: "0.26vw 0.26vw 0 rgba(0, 0, 0)",
              marginY: "2vw",
              height: isMobile ? "min-content" : "auto",
            }}
          >
            <Box
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "700",
                fontSize: isMobile ? "3vw" : "1vw",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {isMobile ? "Next" : "Next Case Study"}{" "}
              <span style={{ marginLeft: 8 }}>▶</span>
            </Box>
          </Button>
        ) : (
          <Box sx={{ inlineSize: "30%" }} />
        )}
      </Box>
    </Box>
  );
};

export default Projects;
