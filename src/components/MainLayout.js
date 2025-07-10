import { Outlet, Link, useLocation } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import Logo from "../assets/Logo";
import Menu from "../assets/menu.png";
import MenuBG from "../assets/menubg.svg";
import Footer from "./Footer";
import { useIsMobileScreen } from "./CommonFunctions";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const MainLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const inactiveColor = "#8A8A8A";

  // Helper to check if current path matches link or sub-route
  const isActive = (path) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };
  const isMobile = useIsMobileScreen(768);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box>
      <Box
        sx={{
          borderBottom: "0.1vw solid black",
          display: "flex",
          flexDirection: "row",
          fontSize: "0.94vw", // 18px ≈ 0.94vw on 1920px width
          height: isMobile ? "8vh" : "9.26vh", // 100px ≈ 9.26vh on 1080px height
          justifyContent: "center",
          paddingX: "4.16vw", // 5rem ≈ 80px ≈ 4.16vw, but 13vw is more responsive
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "white",
          zIndex: "9",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Box
            sx={{
              width: "5.2vw", // 100px ≈ 5.2vw on 1920px width
              height: "9.26vh", // 100px ≈ 9.26vh on 1080px height
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "5.2vw",
              minHeight: "9.26vh",
              maxWidth: "5.2vw",
              maxHeight: "9.26vh",
              "& svg": {
                width: isMobile ? "7.5vw" : "5.2vw",
                height: "9vh",
                display: "block",
              },
            }}
          >
            <Logo />
          </Box>
        </Box>

        {!isMobile && (
          <Box
            sx={{
              width: "50%",
              margin: "0 2.5vw 0 auto",
              display: "flex",
              height: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "3vw",
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{ height: "fit-content" }}
            >
              <Typography
                sx={{
                  fontSize: "clamp(0.2vw, 2vw, 0.94vw)", // 4px-18px
                  fontFamily: "Montserrat",
                  fontWeight: isActive("/") ? "bold" : "normal",
                  color: isActive("/") ? "black" : inactiveColor,
                }}
              >
                Home
              </Typography>
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/projects"
              sx={{ height: "fit-content" }}
            >
              <Typography
                sx={{
                  fontSize: "clamp(0.2vw, 2vw, 0.94vw)", // 4px-18px
                  fontFamily: "Montserrat",
                  fontWeight: isActive("/projects") ? "bold" : "normal",
                  color: isActive("/projects") ? "black" : inactiveColor,
                }}
              >
                Projects
              </Typography>
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{ height: "fit-content" }}
            >
              <Typography
                sx={{
                  fontSize: "clamp(0.2vw, 2vw, 0.94vw)", // 4px-18px
                  fontFamily: "Montserrat",
                  fontWeight: isActive("/about") ? "bold" : "normal",
                  color: isActive("/about") ? "black" : inactiveColor,
                }}
              >
                About Me
              </Typography>
            </Button>
            {/* <Button
            color="inherit"
            component={Link}
            to="/resume"
            sx={{ height: "fit-content" }}
          >
            <Typography
              sx={{
                fontSize: "clamp(0.2vw, 2vw, 0.94vw)", // 4px-18px
                fontFamily: "Montserrat",
                fontWeight: isActive("/resume") ? "bold" : "normal",
                color: isActive("/resume") ? "black" : inactiveColor,
              }}
            >
              Resume
            </Typography>
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{ height: "fit-content" }}
          >
            <Typography
              sx={{
                fontSize: "clamp(0.2vw, 2vw, 0.94vw)", // 4px-18px
                fontFamily: "Montserrat",
                fontWeight: isActive("/contact") ? "bold" : "normal",
                color: isActive("/contact") ? "black" : inactiveColor,
              }}
            >
              Contact
            </Typography>
          </Button> */}
          </Box>
        )}
        {isMobile && (
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={Menu}
              alt="Menu"
              style={{ width: "100%", height: "auto", cursor: "pointer" }}
              onClick={() => setMenuOpen(true)}
            />
          </Box>
        )}
      </Box>

      {/* Fullscreen Mobile Menu Box */}
      {isMobile && menuOpen && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "103%",
            background: `url(${MenuBG}) center/cover no-repeat`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            pointerEvents: "auto", // allow interaction on menu
            paddingLeft: "3vw",
          }}
        >
          {/* Overlay to block pointer events on background */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              zIndex: 2001,
              pointerEvents: "none", // block pointer events on background
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "8vw",
              right: "5vw",
              zIndex: 2100,
            }}
          >
            <Button
              onClick={() => setMenuOpen(false)}
              sx={{
                minWidth: 0,
                p: 1,
                color: "#fff",
                background: "rgba(255,255,255)",
                borderRadius: "50%",
              }}
            >
              <CloseIcon sx={{ fontSize: "8vw", color: "#252525" }} />
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "1vw",
              width: "100%",
              height: "100%",
              zIndex: 2101,
              marginTop: "10vh",
            }}
          >
            <Typography
              color="inherit"
              sx={{
                fontFamily: "Montserrat",
                fontSize: "5vw",
                color: "#FE441D",
                borderRadius: "1vw",
                px: "6vw",
                py: "3vw",
                height: "fit-content",
                width: "fit-content",
                fontWeight: "700",
              }}
            >
              Welcome
            </Typography>
            <Button
              color="inherit"
              component={Link}
              to="/"
              onClick={() => setMenuOpen(false)}
              sx={{
                fontFamily: "Montserrat",
                fontSize: "5vw",
                color: isActive("/") ? "black" : inactiveColor,
                borderRadius: "1vw",
                px: "6vw",
                py: "2vw",
                height: "fit-content",
                width: "fit-content",
                textTransform: "none",
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/projects"
              onClick={() => setMenuOpen(false)}
              sx={{
                fontFamily: "Montserrat",
                fontSize: "5vw",
                color: isActive("/projects") ? "black" : inactiveColor,
                borderRadius: "1vw",
                px: "6vw",
                py: "2vw",
                height: "fit-content",
                width: "fit-content",
                textTransform: "none",
              }}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              onClick={() => setMenuOpen(false)}
              sx={{
                fontFamily: "Montserrat",
                fontSize: "5vw",
                color: isActive("/about") ? "black" : inactiveColor,
                borderRadius: "1vw",
                px: "6vw",
                py: "2vw",
                height: "fit-content",
                width: "fit-content",
                textTransform: "none",
              }}
            >
              About Me
            </Button>
            {/* Add more menu items as needed */}
          </Box>
        </Box>
      )}

      <Box sx={{ overflow: "auto", marginTop: "11.6vh" }}>
        {" "}
        {/* 125px ≈ 11.6vh */}
        <Outlet />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
