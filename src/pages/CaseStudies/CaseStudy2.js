import { Box, Typography } from "@mui/material";
import CaseStudy1 from "../../assets/casestudy2-1.svg";
import CaseStudy2 from "../../assets/casestudy2-2.svg";
import CaseStudy3 from "../../assets/casestudy2-3.svg";
import CaseStudy4 from "../../assets/casestudy2-4.svg";
import CaseStudy6 from "../../assets/casestudy2-6.svg";
import CaseStudy7 from "../../assets/casestudy2-7.svg";
import Smiley1 from "../../assets/smiley1.svg";
import Smiley2 from "../../assets/smiley2.svg";
import Smiley3 from "../../assets/smiley3.svg";
import Smiley4 from "../../assets/smiley4.svg";
import orangestar from "../../assets/orangestar.svg";
import video1 from "../../assets/video3.mp4";
import ImageComparisonSlider from "../../components/ImageComparisonSlider";

const CaseStudyTwo = () => {
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
                DIY Online Tax Express
              </Box>
            </Typography>
          </Box>
          <Box>
            <Typography
              fontWeight={600}
              fontStyle="italic"
              sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.15vw" }} // 22px ≈ 1.15vw
            >
              Redesigning DIY tax filing to feel less serious, more
              self-assured.
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
                  Made tax feel less intimidating and more approachable —
                  empowering thousands of Australians to confidently file their
                  taxes on their own.
                </Box>
              </Typography>{" "}
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                paddingY: "2vw",
              }}
            >
              <Typography
                fontSize="1.15vw"
                fontWeight={600}
                color="#FE441D"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Slide to see the difference{" "}
              </Typography>{" "}
            </Box>

            <Box
              sx={{
                paddingX: "6vw",
              }}
            >
              <Box>
                <ImageComparisonSlider
                  oldImage={CaseStudy1}
                  newImage={CaseStudy2}
                />
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
                  So what was the problem?{" "}
                </Typography>{" "}
                <Box
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1.15vw",
                    fontWeight: 500,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Filing taxes solo shouldn’t feel like landing a plane.{" "}
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
                      Outdated experience didn’t reflect how easy tax filing
                      could be.{" "}
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
                      Users dropped off in critical moments — signup, ID
                      verification, and prefill.
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
                      The product felt transactional — I wanted it to feel
                      guided, human, and personal.
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
                      ATO made even simple interaction design a negotiation.
                    </Typography>
                  </Box>
                </Box>{" "}
              </Box>
            </Box>
            <Box sx={{ width: "40%" }}>
              {" "}
              <img
                src={CaseStudy3}
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
                Research{" "}
              </Typography>{" "}
            </Box>
            <Typography
              fontWeight={600}
              fontStyle="italic"
              sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.05vw" }}
            >
              "I started with one question — what does tax feel like for
              Australians?"{" "}
            </Typography>
            <Box sx={{ margin: "2vw 0 0 0" }}>
              <Typography
                fontSize="1.04vw"
                fontWeight={400}
                color="#252525"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                I started with{" "}
                <Box
                  component={"span"}
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.04vw",
                    color: "#252525",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  competitive research across Australian tax products{" "}
                </Box>{" "}
                and fintech tools to understand the landscape and existing
                patterns. But more importantly,{" "}
                <Box
                  component={"span"}
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.04vw",
                    color: "#252525",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  I spent time digging into user behaviour{" "}
                </Box>{" "}
                — how people approached tax today versus how they wished it
                felt. This meant studying not just flows, but language, tone,
                and interaction models that felt familiar and trusted in the
                Australian market. It was less about reinventing tax and more
                about meeting people where they already were.
              </Typography>{" "}
            </Box>
          </Box>
          <Box sx={{ paddingX: "0.2vw", paddingY: "3vw" }}>
            <img
              src={CaseStudy4}
              alt="CaseStudy5"
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
                UX Foundations{" "}
              </Typography>{" "}
            </Box>
            <Typography
              fontWeight={600}
              fontStyle="italic"
              sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.05vw" }}
            >
              "Make tax feel less like paperwork, more like progress."
            </Typography>
            <Box>
              <Typography
                fontSize="1.04vw"
                fontWeight={400}
                color="#252525"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                I built a comprehensive{" "}
                <Box
                  component={"span"}
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.04vw",
                    color: "#252525",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  design system from the ground up{" "}
                </Box>{" "}
                — defining colours, typography, iconography, branding, and
                illustrations that felt both modern and approachable. A big
                focus was establishing visual markers of trust throughout the
                experience — verified badges, secure patterns, and friendly
                prompts that reassured users at every step.{" "}
                <Box
                  component={"span"}
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.04vw",
                    color: "#252525",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  The result was a flexible UI that could scale seamlessly
                  across mobile and tablet{" "}
                </Box>{" "}
                while still feeling personal and easy to navigate.{" "}
              </Typography>{" "}
            </Box>
          </Box>
          <Box sx={{ paddingY: "2vw" }}>
            <video
              src={video1}
              width="100%"
              height="auto"
              autoPlay
              muted
              loop
              playsInline
              style={{
                borderRadius: "0.42vw",
                display: "block",
                width: "100%",
                height: "auto",
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
                Design Iterations — Evolving the Solution{" "}
              </Typography>{" "}
            </Box>
            <Typography
              fontWeight={600}
              fontStyle="italic"
              sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.05vw" }}
            >
              "Design isn’t just screens — it’s the invisible system that makes
              them work."{" "}
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
                clarity and impact.{" "}
              </Typography>{" "}
            </Box>
          </Box>
          <Box sx={{ paddingY: "2vw" }}>
            <img
              src={CaseStudy6}
              alt="CaseStudy6"
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
                Designed at scale{" "}
              </Typography>{" "}
            </Box>
            <Typography
              fontWeight={600}
              fontStyle="italic"
              sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.05vw" }}
            >
              "Designed over 300+ screens — every detail mattered."
            </Typography>
            <Box sx={{ margin: "2vw 0 0 0", fontSize: "1.04vw" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box>
                  <Box>
                    <Box
                      component={"span"}
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.04vw",
                        color: "#252525",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      → End-to-end desktop flows
                    </Box>{" "}
                    covering signup, ID verification, prefill, tax filing, and
                    submission.{" "}
                  </Box>
                  <Box>
                    <Box
                      component={"span"}
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.04vw",
                        color: "#252525",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      → Partnered closely with developers
                    </Box>{" "}
                    — creating interaction specs for even the smallest
                    micro-interaction.
                  </Box>
                  <Box>
                    {" "}
                    <Box
                      component={"span"}
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.04vw",
                        color: "#252525",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      → Designed small but high-impact moments
                    </Box>{" "}
                    — icons, success states, nudge messages that felt local and
                    personal.{" "}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ paddingY: "2vw" }}>
            <video
              src={video1}
              width="100%"
              height="auto"
              autoPlay
              muted
              loop
              playsInline
              style={{
                borderRadius: "0.42vw",
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "6vw",
            marginBottom: "6vw",
          }}
        >
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
                Next steps{" "}
              </Typography>{" "}
            </Box>
            <Typography
              fontWeight={600}
              fontStyle="italic"
              sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.05vw" }}
            >
              "Good design listens — so I built for feedback."{" "}
            </Typography>
            <Box>
              <Typography
                fontSize="1.04vw"
                fontWeight={400}
                color="#252525"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                To keep improving the experience,{" "}
                <Box
                  component={"span"}
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.04vw",
                    color: "#252525",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  I built feedback loops directly into the product{" "}
                </Box>{" "}
                — learning from users in real time as they navigated complex tax
                flows. I introduced contextual prompts, smarter error handling,
                and tiny helpers like auto-calculators for tricky tax fields —
                all designed to reduce friction and guide users gently.{" "}
                <Box
                  component={"span"}
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.04vw",
                    color: "#252525",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Right now, I’m focused on redesigning the critical ID
                  verification flow{" "}
                </Box>{" "}
                — making it clearer, faster, and more reassuring for users at a
                sensitive step.{" "}
              </Typography>{" "}
            </Box>
          </Box>
          <Box sx={{ paddingY: "2vw" }}>
            <img
              src={CaseStudy7}
              alt="CaseStudy7"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CaseStudyTwo;
