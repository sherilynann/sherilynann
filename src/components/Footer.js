import { Box, Divider, IconButton, Typography } from "@mui/material";
import Signature from "../assets/signature.svg";
import Copyright from "../assets/copyright.svg";
import linkedin from "../assets/linkedin.svg";
import pinterest from "../assets/pinterest.svg";
import behance from "../assets/behance.svg";
import dribbble from "../assets/dribbble.svg";
import instagram from "../assets/instagram.svg";
import { useIsMobileScreen } from "./CommonFunctions";

// Social links and icons
const socialLinks = [
  {
    url: "https://www.linkedin.com/in/sherilyn-chacko/",
    icon: linkedin,
    alt: "linkedin",
  },
  {
    url: "https://in.pinterest.com/sherilynchacko/",
    icon: pinterest,
    alt: "pinterest",
  },
  {
    url: "https://www.behance.net/sherilynchacko",
    icon: behance,
    alt: "behance",
  },
  {
    url: "https://www.instagram.com/sherilyn.chacko/",
    icon: instagram,
    alt: "instagram",
  },
  {
    url: "https://dribbble.com/sherilyn1991",
    icon: dribbble,
    alt: "dribbble",
  },
];

const Footer = () => {
  const isMobile = useIsMobileScreen(768);

  return (
    <Box>
      <Divider sx={{ color: "#BEBEBE" }} />
      <Box
        sx={{
          paddingX: "4vw",
          paddingY: "2vh",
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Box
          sx={{
            padding: "1vh 0",
            width: isMobile ? "100%" : "20%",
            height: isMobile ? "100%" : "40%",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: isMobile ? "1vh" : "2vh" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: isMobile ? "100%" : "60%",
                  height: "100%",
                }}
              >
                <img
                  src={Signature}
                  alt="signature"
                  style={{
                    width: isMobile ? "25%" : "100%",
                    height: isMobile ? "30%" : "100%",
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                gap: isMobile ? "2vw" : "0",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "300",
                  fontSize: isMobile ? "2vw" : "1.04vw", // 20px ≈ 1.04vw on 1920px
                  letterSpacing: "0.05vw",
                }}
              >
                sherilynchacko1991@gmail.co,
              </Typography>
              {isMobile && (
                <Box sx={{ display: "flex", alignItems: "center", gap: "2vw" }}>
                  {" "}
                  <Divider
                    orientation="vertical"
                    flexItem
                  />
                  <Box>
                    <Typography
                      color="#5B5B5B"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: "400",
                        fontSize: isMobile ? "2vw" : "1.04vw", // 20px ≈ 1.04vw
                        letterSpacing: "0.15vw",
                      }}
                    >
                      2025
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              {!isMobile && (
                <Box
                  sx={{
                    width: "100%",
                    paddingX: "2vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2vw",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "25%",
                      height: "100%",
                    }}
                  >
                    <img
                      src={Copyright}
                      alt="copy"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>

                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ border: "0.1vw solid black" }}
                  />
                  <Box>
                    <Typography
                      color="#5B5B5B"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: "400",
                        fontSize: "1.04vw", // 20px ≈ 1.04vw
                        letterSpacing: "0.15vw",
                      }}
                    >
                      2025
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: isMobile ? "0" : "auto",
            justifyContent: isMobile ? "center" : "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "5vw" : "4vw",
              padding: isMobile ? "0.5vw" : "2vw",
            }}
          >
            {socialLinks.map(({ url, icon, alt }) => (
              <Box key={alt}>
                <IconButton
                  onClick={() => window.open(url, "_blank")}
                >
                  <img
                    src={icon}
                    alt={alt}
                    style={{ width: isMobile ? "4vw" : "2vw", height: isMobile ? "4vw" : "2vw" }}
                  />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
