import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Profile from "../assets/profile.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ExperienceSection from "../components/ExperienceSection";
import Star from "../assets/star.svg";

const AboutMe = () => {
  return (
    <Box sx={{ paddingX: "6vw" }}>
      <Box
        sx={{
          width: "100%",
          padding: "1vw 0 0 0",
          margin: "2vw 0 2vw 0",
        }}
      >
        <Typography
          color="#252525"
          sx={{ fontFamily: "Montserrat", fontSize: "1.88vw", fontWeight: 600 }} // 36px ≈ 1.88vw
        >
          ————{" "}
          <Box component={"span"} sx={{ letterSpacing: "0.11vw" }}>
            {" "}
            {/* 2.2px ≈ 0.11vw */}
            About Me
          </Box>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", marginTop: "5.2vw" }}>
        {" "}
        {/* 10rem ≈ 5.2vw */}
        <Box
          sx={{
            width: "45%",
            padding: "1vw",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={Profile} alt="profile" width={"100%"} height={"100%"} />
        </Box>
        <Box
          sx={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
            gap: "0.52vw", // 1rem ≈ 0.52vw
            padding: "2vw", // 4rem ≈ 2vw
            justifyContent: "center",
          }}
        >
          <Typography
            fontSize="1.67vw" // 32px ≈ 1.67vw
            fontWeight={600}
            color="#252525"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "0.05vw",
            }} // 1px ≈ 0.05vw
          >
            Hi! I’m Sherilyn!{" "}
          </Typography>

          <Typography
            fontSize="1.25vw" // 24px ≈ 1.25vw
            fontWeight={400}
            color="#252525"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "0.05vw",
            }}
          >
            “I'm a UI/UX Designer based in Bangalore, India, with 10 years of
            creative adventures under my belt. Originally diving into the world
            of Fashion Merchandising, I've morphed into a multi-hat-wearing
            enthusiast –{" "}
            <Box
              component="span"
              sx={{
                color: "#FE441D",
                fontSize: "1.25vw",
                fontWeight: 400,
                fontFamily: "Montserrat, sans-serif",
                letterSpacing: "0.05vw",
              }}
            >
              I'm a product designer, writer, entrepreneur, and content creator.{" "}
            </Box>
          </Typography>
          <Typography
            fontSize="1.25vw"
            fontWeight={400}
            color="#252525"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "0.05vw",
            }}
          >
            I specialize in crafting delightful experiences for SaaS products,
            THINK- jazzy dashboards, and nifty mobile apps.
          </Typography>
          <Typography
            fontSize="1.25vw"
            fontWeight={400}
            color="#252525"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "0.05vw",
            }}
          >
            Born in bustling Mumbai and now soaking up Bangalore's vibes, I've
            got a soft spot for all things tech, especially AI, Chatbots, and
            NLP. I use my natural eye for design to build sleek, future-ready
            interfaces that just make sense.
          </Typography>

          <Typography
            fontSize="1.25vw"
            fontWeight={400}
            color="#252525"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "0.05vw",
            }}
          >
            By day, I'm a{" "}
            <Box
              component="span"
              sx={{
                color: "#FE441D",
                fontSize: "1.25vw",
                fontWeight: 400,
                fontFamily: "Montserrat, sans-serif",
                letterSpacing: "0.05vw",
              }}
            >
              Senior UX Engineer at H&R Block Australia.{" "}
            </Box>{" "}
            Off the clock, you'll find me behind a lens capturing moments,
            getting crafty, and travelling.
          </Typography>
          <Typography
            fontSize="1.25vw"
            fontWeight={400}
            color="#252525"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "0.05vw",
            }}
          >
            Drop a line, let's chat – I'm all about connecting and making cool
            stuff happen!"
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography
          fontSize="2.5vw" // 48px ≈ 2.5vw
          fontWeight={700}
          color="#FE441D"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            marginTop: "7.8vw", // 15rem ≈ 7.8vw
            textDecoration: "underline",
            letterSpacing: "0.10vw", // 2px ≈ 0.10vw
          }}
        >
          EDUCATION
        </Typography>
        <List sx={{ display: "flex", flexDirection: "column", gap: "1vw" }}>
          {/* MBA */}
          <ListItem alignItems="flex-start" >
            <ListItemText
              sx={{ display: "flex", flexDirection: "column", gap: "0.78vw" }} // 1.5rem ≈ 0.78vw
              primary={
                <Typography
                  color="#252525"
                  sx={{
                    fontSize: "1.25vw",
                    fontWeight: "700",
                    fontFamily: "Montserrat, sans-serif",
                    letterSpacing: "0.10vw",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "1.56vw", color: "#252525" }}>
                    {" "}
                    {/* 30px ≈ 1.56vw */}
                    <FiberManualRecordIcon fontSize="1.04vw" />
                  </ListItemIcon>
                  MBA - Fashion Merchandising and Retail Management - May 2015
                </Typography>
              }
              secondary={
                <Typography
                  sx={{
                    marginLeft: "2vw",
                    fontSize: "1.04vw",
                    fontWeight: "400",
                    fontFamily: "Montserrat, sans-serif",
                    letterSpacing: "0.10vw",
                  }}
                  color="#252525"
                >
                  FDDI Business School (Ministry of Commerce and Industry,
                  Government of India), Institute of National Importance – By
                  Act of Parliament
                </Typography>
              }
            />
          </ListItem>

          {/* UI/UX Diploma */}
          <ListItem alignItems="flex-start">
            <ListItemText
              sx={{ display: "flex", flexDirection: "column", gap: "0.78vw" }}
              primary={
                <Typography
                  color="#252525"
                  sx={{
                    fontSize: "1.25vw",
                    fontWeight: "700",
                    fontFamily: "Montserrat, sans-serif",
                    letterSpacing: "0.10vw",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "1.56vw", color: "#252525" }}>
                    {" "}
                    {/* 30px ≈ 1.56vw */}
                    <FiberManualRecordIcon fontSize="1.04vw" />
                  </ListItemIcon>
                  Advanced Diploma UI/UX Course
                </Typography>
              }
              secondary={
                <Typography
                  sx={{
                    marginLeft: "2vw",
                    fontSize: "1.04vw",
                    fontWeight: "400",
                    fontFamily: "Montserrat, sans-serif",
                    letterSpacing: "0.10vw",
                  }}
                  color="#252525"
                >
                  Electronics & ICT Academy, IIT Guwahati
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography
          fontSize="2.5vw"
          fontWeight={700}
          color="#FE441D"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            marginTop: "7.8vw",
            textDecoration: "underline",
            letterSpacing: "0.10vw",
          }}
        >
          EXPERIENCE{" "}
        </Typography>
        <Box sx={{ marginBottom: "5.2vw" }}>
          {" "}
          {/* 10rem ≈ 5.2vw */} <ExperienceSection />
        </Box>
        <Box sx={{ marginBottom: "6.25vw" }}>
          {" "}
          {/* 12rem ≈ 6.25vw */}{" "}
          <Box
            sx={{
              width: "100%",
              padding: "1vw 0 0 0",
              margin: "5.2vw 0 1.56vw 0", // 10rem 0 3rem 0
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1vw",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex ",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "0.78vw", // 1.5rem ≈ 0.78vw
                  }}
                >
                  <Typography
                    color="black"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      fontSize: "2.08vw", // 40px ≈ 2.08vw
                      backgroundColor: "#FE441D",
                      width: "fit-content",
                      paddingX: "0.36vw", // 7px ≈ 0.36vw
                      borderRadius: "0.36vw", // 7px ≈ 0.36vw
                    }}
                  >
                    Thanks for stopping by!
                  </Typography>
                  <Box
                    sx={{
                      display: "flex ",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "0.26vw", // 0.5rem ≈ 0.26vw
                    }}
                  >
                    {" "}
                    <Box
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: "400",
                        fontSize: "1.56vw", // 30px ≈ 1.56vw
                      }}
                    >
                      Let’s connect
                    </Box>
                    <Box sx={{ width: "1.56vw", height: "1.56vw" }}>
                      {" "}
                      {/* 30px ≈ 1.56vw */}
                      <img
                        src={Star}
                        alt="star"
                        width={"100%"}
                        height={"100%"}
                      ></img>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  border: "0.05vw solid #5B5B5B", // 1px ≈ 0.05vw
                  boxShadow: "0 0.21vw 1.3vw 0px rgba(0,0,0,0.15)", // 4px 25px
                  paddingX: "2.6vw", // 5rem ≈ 2.6vw
                  paddingY: "1.56vw", // 3rem ≈ 1.56vw
                  borderRadius: "2.34vw", // 45px ≈ 2.34vw
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex ",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "0.26vw",
                    }}
                  >
                    <Typography
                      color="black"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: "700",
                        fontSize: "1.15vw", // 22px ≈ 1.15vw
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
                        fontSize: "1.15vw",
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
                      gap: "0.26vw",
                    }}
                  >
                    <Typography
                      color="black"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: "700",
                        fontSize: "1.15vw",
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
                        fontSize: "1.15vw",
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
                      gap: "0.26vw",
                    }}
                  >
                    <Typography
                      color="black"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: "700",
                        fontSize: "1.15vw",
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
                        fontSize: "1.15vw",
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
          </Box>{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
