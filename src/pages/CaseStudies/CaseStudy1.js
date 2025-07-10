import { Box, Typography } from "@mui/material";
import CaseStudy1 from "../../assets/casestudy1.svg";
import CaseStudy2 from "../../assets/casestudy1-2.svg";
import CaseStudy3 from "../../assets/casestudy1-3.svg";
import CaseStudy4 from "../../assets/casestudy1-4.png";
import CaseStudy5 from "../../assets/casestudy1-5.svg";
import CaseStudy6 from "../../assets/casestudy1-6.png";
import CaseStudy7 from "../../assets/casestudy1-7.svg";
import Smiley1 from "../../assets/smiley1.svg";
import Smiley2 from "../../assets/smiley2.svg";
import Smiley3 from "../../assets/smiley3.svg";
import Smiley4 from "../../assets/smiley4.svg";
import orangestar from "../../assets/orangestar.svg";
import Bulb from "../../assets/Light bulb.svg";
import VideoInsidePhone from "../../components/VideoInsideFrame";
import mobile_video1 from "../../assets/mobile_video1.mp4";
import mobile_video2 from "../../assets/mobile_video2.mp4";
import { useIsMobileScreen } from "../../components/CommonFunctions";

const CaseStudyOne = () => {
  const isMobile = useIsMobileScreen();
  return (
    <Box>
      <Box sx={{ fontFamily: "Montserrat, sans-serif" }}>
        <Box sx={{ paddingX: "6vw", paddingY: "2vw" }}>
          <Box>
            <Typography
              fontSize="2.08vw" // 40px ≈ 2.08vw on 1920px
              fontWeight={700}
              color="black"
              sx={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Case Study:{" "}
              <Box
                component="span"
                sx={{
                  color: "#FE441D",
                  fontSize: "2.08vw",
                  fontWeight: 700,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Receipt Hub App
              </Box>
            </Typography>
          </Box>
          <Box>
            <Typography
              fontWeight={600}
              fontStyle="italic"
              sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.15vw" }} // 22px ≈ 1.15vw
            >
              Designing beyond Receipts — Creating a seamless experience for
              tax-time ready data
            </Typography>
          </Box>
          <Box sx={{ margin: "4vw 0 0 0" }}>
            <Box sx={{ display: "flex", gap: "0.5vw" }}>
              <Typography
                fontSize="1.15vw"
                fontWeight={600}
                color="#FE441D"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Outcome?{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#000000",
                    fontSize: "1.15vw",
                    fontWeight: 400,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Transforming a clunky receipt saving tool into a smart,
                  ATO-compliant logbook for everyday users.{" "}
                </Box>
              </Typography>{" "}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingX: "6vw",
              }}
            >
              <Box sx={{ width: "53%" }}>
                <img
                  src={CaseStudy1}
                  alt="CaseStudy1"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ padding: "5vw" }}>
          <Box
            sx={{
              backgroundColor: "#252525",
              padding: "3vw",
              display: "flex",
              borderRadius: "1vw",
            }}
          >
            <Box
              sx={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                gap: "3vw",
              }}
            >
              <Box>
                <Typography
                  fontSize="1.56vw"
                  fontWeight={700}
                  color="#FE441D"
                  sx={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  So what was the problem?
                </Typography>{" "}
                <Box
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1.15vw",
                    fontWeight: 500,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Receipts were getting lost — so was user patience
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "2vw" }}
              >
                <Box sx={{ display: "flex", gap: "2vw", alignItems: "center" }}>
                  <Box sx={{ width: "5.2vw", height: "5.2vw" }}>
                    <img
                      src={Smiley1}
                      alt="smiley1"
                      width={"100%"}
                      height={"100%"}
                    ></img>
                  </Box>
                  <Box>
                    <Typography
                      fontSize="1.04vw"
                      fontWeight={400}
                      color="#FFFFFF"
                      sx={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Users had to manually save physical receipts.{" "}
                    </Typography>{" "}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: "2vw", alignItems: "center" }}>
                  <Box sx={{ width: "5.2vw", height: "5.2vw" }}>
                    <img
                      src={Smiley2}
                      alt="smiley2"
                      width={"100%"}
                      height={"100%"}
                    ></img>
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      fontSize="1.04vw"
                      fontWeight={400}
                      color="#FFFFFF"
                      sx={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Submitting to tax agents was error-prone and
                      time-consuming.{" "}
                    </Typography>
                  </Box>
                </Box>{" "}
                <Box sx={{ display: "flex", gap: "2vw", alignItems: "center" }}>
                  <Box sx={{ width: "5.2vw", height: "5.2vw" }}>
                    <img
                      src={Smiley3}
                      alt="smiley3"
                      width={"100%"}
                      height={"100%"}
                    ></img>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {" "}
                    <Typography
                      fontSize="1.04vw"
                      fontWeight={400}
                      color="#FFFFFF"
                      sx={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      The previous app design had friction — too many clicks,
                      scattered actions, lack of helpful prompts.{" "}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: "2vw", alignItems: "center" }}>
                  <Box sx={{ width: "5.2vw", height: "5.2vw" }}>
                    <img
                      src={Smiley4}
                      alt="smiley4"
                      width={"100%"}
                      height={"100%"}
                    ></img>
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      fontSize="1.04vw"
                      fontWeight={400}
                      color="#FFFFFF"
                      sx={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Missing critical ATO-required data points like receip,
                      GST, and expense category.{" "}
                    </Typography>
                  </Box>
                </Box>{" "}
              </Box>
            </Box>
            <Box sx={{ width: "40%" }}>
              {" "}
              <img
                src={CaseStudy2}
                alt="CaseStudy2"
                width={"100%"}
                height={"100%"}
              ></img>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", padding: "6vw" }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.5vw",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "1.56vw", // 30px ≈ 1.56vw on 1920px
                  height: "2.78vh", // 30px ≈ 2.78vh on 1080px
                }}
              >
                <img
                  src={orangestar}
                  alt="orangestar"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </Box>
              <Typography
                fontSize="1.56vw"
                fontWeight={700}
                color="#FE441D"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Phase 1 — Making receipts less of a hassle{" "}
              </Typography>{" "}
            </Box>
            <Box>
              <Typography
                fontSize="1.04vw"
                fontWeight={400}
                color="#252525"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                People didn’t want to save receipts physically just for tax time
                — it felt outdated and painful. The old flow had too many clicks
                with missing key details required by ATO standards.{" "}
                <Box
                  component={"span"}
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.04vw",
                    color: "#252525",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  I focused on simplifying the capture flow
                </Box>{" "}
                — reducing friction while making sure ATO-compliant information
                was collected up front. This redesign made receipts effortless
                to capture, smarter to store, and ready for tax without the
                mess. This is also where I built a design system — giving
                Receipt Hub its new look (and making future designs easier).{" "}
              </Typography>{" "}
            </Box>
          </Box>
          <Box sx={{ padding: "3vw" }}>
            <img
              src={CaseStudy3}
              alt="CaseStudy3"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", padding: "6vw" }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.5vw",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "1.56vw", // 30px ≈ 1.56vw on 1920px
                  height: "2.78vh", // 30px ≈ 2.78vh on 1080px
                }}
              >
                <img
                  src={orangestar}
                  alt="orangestar"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </Box>
              <Typography
                fontSize="1.56vw"
                fontWeight={700}
                color="#FE441D"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                The Curveballs — Introduction of two new verticals{" "}
              </Typography>{" "}
            </Box>
            <Box>
              <Typography
                fontSize="1.05vw"
                fontWeight={600}
                fontStyle="italic"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                "More Than Just Receipts — Expanding the Hub with Purpose"
              </Typography>
            </Box>
          </Box>
          <Box sx={{ padding: "3vw" }}>
            <img
              src={CaseStudy4}
              alt="CaseStudy4"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", padding: "6vw" }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.5vw",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "1.56vw", // 30px ≈ 1.56vw on 1920px
                  height: "2.78vh", // 30px ≈ 2.78vh on 1080px
                }}
              >
                <img
                  src={orangestar}
                  alt="orangestar"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </Box>
              <Typography
                fontSize="1.56vw"
                fontWeight={700}
                color="#FE441D"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Design Iterations — Evolving the Solution{" "}
              </Typography>{" "}
            </Box>
            <Typography
              fontSize="1.05vw"
              fontWeight={600}
              fontStyle="italic"
              sx={{ fontFamily: "Montserrat, sans-serif" }}
            >
              "Make the upload receipt button impossible to miss."{" "}
            </Typography>
            <Box sx={{ margin: "2vw 0 0 0" }}>
              <Typography
                fontSize="1.04vw"
                fontWeight={400}
                color="#252525"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                The original landing page was dense and text-heavy. I proposed a
                cleaner, modern design — but with one non-negotiable. Over
                several iterations, I balanced user-friendly design with
                stakeholder priorities — evolving the interface until we had
                clarity and impact.
              </Typography>{" "}
            </Box>
          </Box>
          <Box sx={{ padding: "3vw" }}>
            <img
              src={CaseStudy5}
              alt="CaseStudy5"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "6vw",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              zIndex: "2",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.5vw",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "1.56vw",
                  height: "2.78vh",
                }}
              >
                <img
                  src={orangestar}
                  alt="orangestar"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </Box>
              <Typography
                fontSize="1.56vw"
                fontWeight={700}
                color="#FE441D"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Listening & Tweaking — Designing with Customers, Not Just for
                Them{" "}
              </Typography>{" "}
            </Box>
            <Typography
              fontSize="1.05vw"
              fontWeight={600}
              fontStyle="italic"
              sx={{ fontFamily: "Montserrat, sans-serif" }}
            >
              "It’s hard to find what I uploaded last month... wish I could just
              create folders and keep it tidy."{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {" "}
              <Box
                sx={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10vw",
                }}
              >
                <Box sx={{ width: "4.16vw", height: "4.16vw" }}>
                  <img
                    src={Bulb}
                    alt="bulb"
                    width={"100%"}
                    height={"100%"}
                  ></img>
                </Box>
                <Box>
                  <Typography
                    fontSize="1.04vw"
                    fontWeight={400}
                    color="#252525"
                    sx={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Before locking in the final solution —{" "}
                    <Box
                      component={"span"}
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.04vw",
                        color: "#FE441D",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      we introduced a Support Page{" "}
                    </Box>{" "}
                    to capture real customer feedback in the wild.
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      Here’s what we learned (and acted on fast):
                      <Box>
                        {" "}
                        <Box>
                          {" "}
                          → Users wanted{" "}
                          <Box
                            component={"span"}
                            sx={{
                              fontWeight: 600,
                              fontSize: "1.04vw",
                              color: "#252525",
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            Folders to organise receipts{" "}
                          </Box>{" "}
                          and logbooks better.
                        </Box>
                        <Box>
                          {" "}
                          → Vehicle Logbook users needed{" "}
                          <Box
                            component={"span"}
                            sx={{
                              fontWeight: 600,
                              fontSize: "1.04vw",
                              color: "#252525",
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            an easier way to maintain records.{" "}
                          </Box>{" "}
                        </Box>
                        <Box>
                          {" "}
                          → Added{" "}
                          <Box
                            component={"span"}
                            sx={{
                              fontWeight: 600,
                              fontSize: "1.04vw",
                              color: "#252525",
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            quick actions for work-from-home logs{" "}
                          </Box>{" "}
                          to simplify tracking.
                        </Box>
                        <Box>
                          →{" "}
                          <Box
                            component={"span"}
                            sx={{
                              fontWeight: 600,
                              fontSize: "1.04vw",
                              color: "#252525",
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            Simplified file management{" "}
                          </Box>{" "}
                          for easier tax-time handover.
                        </Box>
                      </Box>
                    </Box>
                  </Typography>{" "}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              zIndex: "1",
              margin: "0 0 0 auto",
              width: "38vw",
              height: "42vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={CaseStudy6}
              alt="CaseStudy6"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", padding: "6vw" }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.5vw",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "1.56vw", // 30px ≈ 1.56vw on 1920px
                  height: "2.78vh", // 30px ≈ 2.78vh on 1080px
                }}
              >
                <img
                  src={orangestar}
                  alt="orangestar"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </Box>
              <Typography
                fontSize="1.56vw"
                fontWeight={700}
                color="#FE441D"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Final Solution — The Receipt Hub Now{" "}
              </Typography>{" "}
            </Box>
            <Box>
              <Typography
                fontSize="1.04vw"
                fontWeight={400}
                color="#252525"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                A redesigned experience that goes beyond just storing receipts —
                The new Receipt Hub helps users log, track, and organise
                expenses effortlessly, with smart defaults, auto-categorisation,
                and an intuitive interface. It simplifies tax-time preparation
                while supporting everyday expense management. The solution
                balances business needs with user empathy — highlighting the
                core feature of receipt upload while creating a clean, modern
                interface users actually want to engage with.
              </Typography>{" "}
            </Box>
          </Box>
          <Box
            sx={{
              padding: "0 7.8vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={CaseStudy7}
              alt="CaseStudy7"
              width={"100%"}
              height={"100%"}
            />
          </Box>{" "}
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1.56vw",
              }}
            >
              <Typography
                fontSize="1.56vw"
                fontWeight={700}
                color="#FE441D"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Prototype
              </Typography>{" "}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "0.52vw",
                marginBottom: "1.04vw",
                backgroundColor: "transparent",
                gap: "5.2vw",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <Box>
                <VideoInsidePhone video={mobile_video1} />
              </Box>
              <Box>
                <VideoInsidePhone video={mobile_video2} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CaseStudyOne;
