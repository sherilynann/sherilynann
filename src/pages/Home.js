import { Box, Button, Divider, Typography } from "@mui/material";
import Selfie from "../assets/sefie.svg";
import Breaker from "../assets/breaker.svg";
import Star from "../assets/star.svg";
import { useNavigate } from "react-router-dom";
import { projectDetails, shippedImages } from "../data/ProjectDetails";
import { useRef } from "react";
import { useIsMobileScreen } from "../components/CommonFunctions";

const IMAGE_WIDTH = 520; // px
const IMAGE_GAP = 48; // px (3rem gap)
const IMAGES_PER_VIEW = 3;
const STEP = 1; // how many images to move per step (was 2)
const PAUSE = 1200; // ms (was 1000)

const Home = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const scrollInterval = useRef();

  // Helper to scroll to a specific image index
  const scrollToIndex = (idx) => {
    if (scrollRef.current) {
      const scrollAmount = idx * (IMAGE_WIDTH + IMAGE_GAP);
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Step-wise scroll logic
  const startStepScroll = () => {
    let idx = 0;
    const maxIdx = shippedImages.length - IMAGES_PER_VIEW;
    function step() {
      scrollToIndex(idx);
      idx += STEP;
      if (idx > maxIdx) idx = 0;
      scrollInterval.current = setTimeout(step, PAUSE);
    }
    step();
  };

  const stopStepScroll = () => {
    clearTimeout(scrollInterval.current);
    scrollToIndex(0);
  };

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const isMobile = useIsMobileScreen(768);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "5vw" }}>
      <Box sx={{ width: "100%", padding: "2.5vw 6vw 0 6vw" }}>
        <Box
          sx={{
            width: "100%",
            height: isMobile ? "45vh" : "75vh",
            backgroundColor: "black",
            borderRadius: "2.6vw",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              height: isMobile ? "75%" : "100%",
            }}
          >
            <img src={Selfie} alt="selfie" width="100%" height="100%" />
          </Box>
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              display: "flex",
              alignItems: "center",
              paddingRight: "3vw",
              paddingLeft: isMobile ? "3vw" : "0",
              overflow: "hidden",
              height: isMobile ? "100%" : "auto",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: isMobile ? "2vw" : "1.5vw",
                overflow: "auto",
              }}
            >
              <Box>
                <Typography
                  color="white"
                  sx={{
                    fontFamily: "Mulish",
                    fontSize: "2vw",
                    fontWeight: 700,
                    flexWrap: "wrap",
                    wordBreak: "break-word",
                  }}
                >
                  I design for{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "#FE441D",
                      fontFamily: "Mulish",
                      fontSize: "2vw",
                      fontWeight: 700,
                      flexWrap: "wrap",
                      wordBreak: "break-word",
                    }}
                  >
                    the tricky stuff — Tax, money, and data heavy tools.
                  </Box>
                </Typography>
              </Box>
              <Box>
                <Typography
                  color="white"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: isMobile ? "1.7vw" : "1vw",
                  }}
                >
                  I specialise in simplifying complex workflows where accuracy,
                  compliance, and trust matter most. My work sits at the
                  intersection of user behaviour, regulatory constraints, and
                  system intelligence. I design tax return flows for{" "}
                  <Box
                    component="span"
                    color="white"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      fontSize: isMobile ? "1.7vw" : "1vw",
                    }}
                  >
                    H&R Block
                  </Box>
                  , where every choice has real-world financial impact. Lately,
                  I’ve been applying the same thinking to AI products — shaping
                  how humans and machines make decisions together.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "2vw" }}>
                <Typography
                  sx={{
                    fontSize: "1vw",
                    textDecorationLine: "underline",
                    cursor: "pointer",
                  }}
                  color="#FE441D"
                  onClick={handleScroll}
                >
                  See my portfolio!
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1vw",
                    textDecorationLine: "underline",
                    cursor: "pointer",
                  }}
                  color="white"
                  onClick={() => navigate("/about")}
                >
                  About Me
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <img src={Breaker} alt="breaker" width="100%" height="100%" />
      </Box>
      <Box>
        <Box
          sx={{
            width: "100%",
            padding: isMobile ? "1vw 2vw 0 2vw" : "1vw 6vw 0 6vw",
            margin: "2vw 0 2vw 0",
          }}
          ref={sectionRef}
        >
          <Typography
            color="#252525"
            sx={{
              fontFamily: "Montserrat",
              fontSize: isMobile ? "4vw" : "1.9vw",
              fontWeight: 600,
            }}
          >
            ————{" "}
            <Box component={"span"} sx={{ letterSpacing: "0.12vw" }}>
              PROJECTS
            </Box>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5vw" }}>
          {" "}
          {projectDetails.map((project, index) => (
            <Box
              key={index}
              sx={{ display: "flex", flexDirection: "column", gap: "5vw" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  padding: isMobile ? "0 2vw 0 2vw" : "0 6vw 0 6vw",
                }}
              >
                <Box sx={{ height: "25%", width: "100%" }}>
                  <Typography
                    color={project.color1}
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: isMobile ? "4vw" : "2vw",
                      fontWeight: 700,
                    }}
                  >
                    {project.heading1}
                    <Box
                      component="span"
                      sx={{
                        fontFamily: "Montserrat",
                        fontSize: isMobile ? "4vw" : "2vw",
                        fontWeight: 700,
                        color: `${project.color2}`,
                      }}
                    >
                      {" "}
                      {project.heading2}
                    </Box>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "75%",
                    width: "100%",
                    display: "flex",
                  }}
                >
                  {!isMobile && (
                    <Box
                      sx={{
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5vw",
                      }}
                    >
                      <Box sx={{ margin: "1vw 0 1vw 0" }}>
                        <Typography
                          color={project.desColor1}
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: "400",
                            fontSize: "1vw",
                          }}
                        >
                          {project.description1}
                          <Box
                            component="span"
                            sx={{
                              fontFamily: "Montserrat",
                              fontWeight: "800",
                              fontSize: "1vw",
                              color: `${project.desColor2}`,
                            }}
                          >
                            {project.description2}
                          </Box>{" "}
                          <Box
                            component="span"
                            sx={{
                              fontFamily: "Montserrat",
                              fontWeight: "400",
                              fontSize: "1vw",
                              color: `${project.desColor3}`,
                            }}
                          >
                            {project.description3 || ""}
                          </Box>
                        </Typography>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: "400",
                            fontSize: "1vw",
                          }}
                        >
                          Platform
                        </Box>
                        <Box
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: "700",
                            fontSize: "1.25vw",
                          }}
                        >
                          {project.platform}
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: "400",
                            fontSize: "1vw",
                          }}
                        >
                          My Role
                        </Box>
                        <Box
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: "700",
                            fontSize: "1.25vw",
                          }}
                        >
                          {project.role}
                        </Box>
                      </Box>
                      <Box>
                        {" "}
                        <Box
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: "400",
                            fontSize: "1vw",
                          }}
                        >
                          Iterations
                        </Box>
                        <Box
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: "700",
                            fontSize: "1.25vw",
                          }}
                        >
                          {project.iterations}
                        </Box>
                      </Box>
                      <Box>
                        {" "}
                        <Box
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: "400",
                            fontSize: "1vw",
                          }}
                        >
                          NPS Score
                        </Box>
                        <Box
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: "700",
                            fontSize: "1.25vw",
                          }}
                        >
                          {project.npsScore}
                        </Box>
                      </Box>
                      <Box>
                        {" "}
                        <Box
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: "400",
                            fontSize: "1vw",
                          }}
                        >
                          {project?.estimatedRevenue
                            ? "Est. Revenue"
                            : "Project"}
                        </Box>
                        <Box
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: "700",
                            fontSize: "1.25vw",
                          }}
                        >
                          {project?.estimatedRevenue
                            ? project.estimatedRevenue
                            : project.project_type}
                        </Box>
                      </Box>
                      <Box>
                        <Button
                          onClick={() => navigate(`/projects/${project.key}`)}
                          sx={{
                            width: "30%",
                            backgroundColor: "#FE441D",
                            height: "6vh",
                            borderRadius: "1.5vw",
                            textTransform: "none",
                            boxShadow: "0.26vw 0.26vw 0 rgba(0, 0, 0)",
                            marginY: "2vw",
                          }}
                        >
                          {" "}
                          <Box
                            sx={{
                              fontFamily: "Montserrat",
                              fontWeight: "700",
                              fontSize: "1vw",
                              color: "white",
                            }}
                          >
                            View Case Study
                          </Box>{" "}
                        </Button>
                      </Box>
                    </Box>
                  )}
                  <Box
                    onClick={() => navigate(`/projects/${project.key}`)}
                    sx={{
                      width: isMobile ? "100%" : "40%",
                      padding: "4vw",
                      height: "100%",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={`project${index}`}
                      width="100%"
                      height="100%"
                    />
                  </Box>
                </Box>
              </Box>
              {!isMobile && index + 1 < projectDetails.length && (
                <Divider
                  sx={{
                    borderStyle: "dashed",
                    borderColor: "#5B5B5B",
                    borderWidth: "0.1vw",
                    mx: "5vw",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
        {!isMobile && (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <Box
              sx={{
                width: "100%",
                padding: isMobile ? "1vw 2vw 0 2vw" : "1vw 6vw 0 6vw",
                margin: "10vw 0 3vw 0",
              }}
            >
              <Typography
                color="#252525"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: isMobile ? "4vw" : "1.9vw",
                  fontWeight: 600,
                  display: "flex",
                  gap: "0.26vw",
                }}
              >
                ————
                <Box component={"span"} sx={{ letterSpacing: "0.12vw" }}>
                  SHIPPED WORK
                </Box>
              </Typography>
            </Box>
            <Box sx={{ paddingX: "6vw" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "31.25vw", // 600px ≈ 31.25vw on 1920px
                  border: "0.21vw solid #252525",
                  borderRadius: "2.6vw",
                  paddingX: "2.6vw",
                  paddingY: "1.6vw",
                }}
                onMouseEnter={startStepScroll}
                onMouseLeave={stopStepScroll}
              >
                <Box
                  ref={scrollRef}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "2.5vw",
                    padding: "1.6vw,2.6vw",
                    width: "100%",
                    height: "100%",
                    overflow: "auto",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                    transition: "scroll-left 1s",
                  }}
                >
                  {shippedImages.map((image, index) => (
                    <Box
                      key={index}
                      sx={{
                        height: "100%",
                        width: "27vw", // 520px ≈ 27vw on 1920px
                        flexShrink: "0",
                        overflow: "hidden",
                        borderRadius: "2.86vw",
                        backgroundImage:
                          "linear-gradient(to bottom,#dfe6e6, #ffffff)",
                      }}
                    >
                      <img
                        src={image}
                        alt={`shipped${index}`}
                        height="100%"
                        width="100%"
                        style={{ transition: "transform 0.2s" }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        )}
        <Box
          sx={{
            width: "100%",
            padding: isMobile ? "1vw 2vw 0 2vw" : "1vw 6vw 0 6vw",
            margin: "10vw 0 3vw 0",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2vw",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex ",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1.5vw",
                }}
              >
                <Typography
                  color="black"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: isMobile ? "3vw" : "2vw",
                    backgroundColor: "#FE441D",
                    width: "fit-content",
                    paddingX: "0.36vw",
                    borderRadius: "0.36vw",
                  }}
                >
                  Thanks for stopping by!
                </Typography>
                <Box
                  sx={{
                    display: "flex ",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "0.5vw",
                  }}
                >
                  {" "}
                  <Box
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      fontSize: isMobile ? "2.56vw" : "1.56vw",
                    }}
                  >
                    Let’s connect
                  </Box>
                  <Box
                    sx={{
                      width: "2vw",
                      height: "2vw",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src={Star} alt="star" width={"100%"} height={"100%"} />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                border: "0.05vw solid #5B5B5B",
                boxShadow: "0 0.21vw 1.3vw 0px rgba(0,0,0,0.15) ",
                paddingX: isMobile ? "2.6vw" : "2.6vw",
                paddingY: isMobile ? "3vw" : "1.6vw",
                borderRadius: "2.34vw",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex ",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: isMobile ? "1vw" : "0.5vw",
                  }}
                >
                  <Typography
                    color="black"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      fontSize: isMobile ? "2.15vw" : "1.15vw",
                      width: "fit-content",
                    }}
                  >
                    Email:
                  </Typography>
                  <Typography
                    color="black"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      fontSize: isMobile ? "2.15vw" : "1.15vw",
                      width: "fit-content",
                    }}
                  >
                    sherilynchacko1991@gmail.com
                  </Typography>
                </Box>{" "}
                <Box
                  sx={{
                    display: "flex ",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "0.5vw",
                  }}
                >
                  <Typography
                    color="black"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      fontSize: isMobile ? "2.15vw" : "1.15vw",
                      width: "fit-content",
                    }}
                  >
                    Phone:
                  </Typography>
                  <Typography
                    color="black"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      fontSize: isMobile ? "2.15vw" : "1.15vw",
                      width: "fit-content",
                    }}
                  >
                    +91-9113940968
                  </Typography>
                </Box>{" "}
                <Box
                  sx={{
                    display: "flex ",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: isMobile ? "1vw" : "0.5vw",
                  }}
                >
                  <Typography
                    color="black"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      fontSize: isMobile ? "2.15vw" : "1.15vw",
                      width: "fit-content",
                    }}
                  >
                    Address:{" "}
                  </Typography>
                  <Typography
                    color="black"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      fontSize: isMobile ? "2.15vw" : "1.15vw",
                      width: "fit-content",
                    }}
                  >
                    B209, Platinum Lifestyle, JP Nagar, Phase 8,
                    Bangalore-560083{" "}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
