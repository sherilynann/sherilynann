import { Box, Typography } from "@mui/material";
import CaseStudy1 from "../../assets/casestudy3-1.png";
import CaseStudy2 from "../../assets/casestudy3-2.svg";
import CaseStudy3 from "../../assets/casestudy3-3.png";
import CaseStudy4 from "../../assets/casestudy3-4.svg";
import CaseStudy5 from "../../assets/casestudy3-5.svg";
import CaseStudy6 from "../../assets/casestudy3-6.svg";
import Smiley1 from "../../assets/smiley1.svg";
import Smiley2 from "../../assets/smiley2.svg";
import Smiley3 from "../../assets/smiley3.svg";
import Smiley4 from "../../assets/smiley4.svg";
import orangestar from "../../assets/orangestar.svg";

const CaseStudyThree = () => {
  return (
    <Box>
      <Box sx={{ fontFamily: "Montserrat, sans-serif" }}>
        <Box sx={{ paddingX: "6vw", paddingY: "2vw" }}>
          <Box>
            <Typography
              fontSize="2.08vw"
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
                Forecast{" "}
              </Box>
            </Typography>
          </Box>
          <Box>
            <Typography
              fontWeight={600}
              fontStyle="italic"
              sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.15vw" }}
            >
              From Scattered Data to a Single Source of Truth
            </Typography>
          </Box>
          <Box sx={{ margin: "4vw 0 0 0" }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "3vw" }}>
              {" "}
              <Box sx={{ display: "flex", gap: "0.5vw", width: "55%" }}>
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
                    A collaborative internal tool for managers and admins to
                    seamlessly plan resources, assign hours, manage open
                    positions, and drive forecasting — all within a centralised
                    system.
                  </Box>
                </Typography>{" "}
              </Box>{" "}
              <Box sx={{ width: "45%" }}>
                <img
                  src={CaseStudy1}
                  alt="CaseStudy1"
                  width={"100%"}
                  height={"100%"}
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
                  Resource planning was heavily dependent on manual effort,
                  excel sheets, scattered requests, and outdated methods.{" "}
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "2vw" }}
              >
                <Box
                  sx={{ display: "flex", gap: "2vw", alignItems: "center" }}
                >
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
                      No clear visibility of assigned hours, projects, or
                      availability.
                    </Typography>{" "}
                  </Box>
                </Box>
                <Box
                  sx={{ display: "flex", gap: "2vw", alignItems: "center" }}
                >
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
                      Manual tracking in Excel = errors, duplications, outdated
                      data.
                    </Typography>
                  </Box>
                </Box>{" "}
                <Box
                  sx={{ display: "flex", gap: "2vw", alignItems: "center" }}
                >
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
                      Approvals for hours or resource changes were slow &
                      disconnected.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ display: "flex", gap: "2vw", alignItems: "center" }}
                >
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
                      No easy way to forecast spend vs assigned hours.{" "}
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
            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5vw", alignItems: "center" }}>
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
                Handling Chaos — My Role{" "}
              </Typography>{" "}
            </Box>
            <Box sx={{ margin: "2vw 0 0 0" }}>
              <Box
                component={"span"}
                sx={{
                  fontWeight: 600,
                  fontSize: "1.04vw",
                  color: "#252525",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                When I entered this project:
              </Box>{" "}
              <Box>
                <Typography
                  fontSize="1.04vw"
                  fontWeight={400}
                  color="#252525"
                  sx={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  There were no clear user flows — just scattered business rules
                  and fragmented processes living across different teams. My
                  challenge was to make sense of this chaos and translate it
                  into something meaningful, actionable, and user-friendly — all
                  within 3 weeks.
                </Typography>{" "}
              </Box>
            </Box>{" "}
            <Box sx={{ margin: "2vw 0 0 0" }}>
              <Box
                component={"span"}
                sx={{
                  fontWeight: 600,
                  fontSize: "1.04vw",
                  color: "#252525",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                I started by:
              </Box>{" "}
              <Box>
                <Typography
                  fontSize="1.04vw"
                  fontWeight={400}
                  color="#252525"
                  sx={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Immersing myself in the existing workflows, mapping how
                  Managers and Admins navigated their tasks, and identifying the
                  most decision-heavy moments. This helped me prioritise the
                  information architecture and start designing around clarity,
                  control, and ease of use.
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
          <Box sx={{ paddingX: "0.2vw", paddingY: "3vw" }}>
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
            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5vw", alignItems: "center" }}>
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
                My Design Process{" "}
              </Typography>{" "}
            </Box>
            <Box sx={{ margin: "2vw 0 0 0" }}>
              <Box>
                <Typography
                  fontSize="1.04vw"
                  fontWeight={400}
                  color="#252525"
                  sx={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  With clarity as the north star, I followed a structured yet
                  fast-paced design process. I{" "}
                  <Box
                    component={"span"}
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.04vw",
                      color: "#252525",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    collaborated closely with stakeholders to validate rules and
                    scenarios,{" "}
                  </Box>{" "}
                  mapped complex workflows into simple user journeys, and
                  created wireframes that{" "}
                  <Box
                    component={"span"}
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.04vw",
                      color: "#252525",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    brought structure to fragmented tasks.
                  </Box>{" "}
                  I focused on{" "}
                  <Box
                    component={"span"}
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.04vw",
                      color: "#252525",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    reducing cognitive load{" "}
                  </Box>{" "}
                  — designing clean layouts, actionable dashboards, and
                  decision-first screens. Rapid prototyping and feedback loops
                  helped me iterate quickly, ensuring the designs not only
                  worked for the business but felt intuitive for Managers and
                  Admins juggling resource planning under pressure.
                </Typography>{" "}
              </Box>
            </Box>{" "}
          </Box>
          <Box sx={{ paddingX: "0.2vw", paddingY: "3vw", width: "90%" }}>
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
            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5vw", alignItems: "center" }}>
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
                Plot Twist — The Multi-Role Challenge{" "}
              </Typography>{" "}
            </Box>
            <Typography
              fontWeight={600}
              fontStyle="italic"
              sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.15vw" }}
            >
              “Wait… so the manager, admin, and governance all need different
              views? This tool's gonna need a personality for each hat we wear!”{" "}
            </Typography>
            <Box sx={{ marginY: "2vw" }}>
              <Typography
                fontSize="1.04vw"
                fontWeight={400}
                color="#252525"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Right in the middle of untangling workflows and structuring data
                — came the big plot twist. I had to introduce three distinct
                user roles: Managers, Admins, and Governance. Each role came
                with its own set of tasks, data needs, and sensitivities.{" "}
              </Typography>{" "}
            </Box>
            <Box sx={{ marginY: "2vw" }}>
              <Typography
                fontSize="1.04vw"
                fontWeight={400}
                color="#252525"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                This meant designing role-specific dashboards, gated access, and
                permission controls — all while ensuring the experience stayed
                simple, clear, and focused. It added a new layer of complexity —
                but{" "}
                <Box
                  component={"span"}
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.04vw",
                    color: "#252525",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  it pushed the solution to become smarter, more tailored, and
                  deeply aligned
                </Box>{" "}
                with how teams actually work. while still feeling personal and
                easy to navigate.{" "}
              </Typography>{" "}
            </Box>
          </Box>
          <Box sx={{ paddingY: "2vw" }}>
            <img
              src={CaseStudy5}
              alt="CaseStudy5"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", padding: "6vw" }}>
          <Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5vw", alignItems: "center" }}>
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
                Where We Landed{" "}
              </Typography>{" "}
            </Box>
            <Typography
              fontWeight={600}
              fontStyle="italic"
              sx={{ fontFamily: "Montserrat, sans-serif" }}
            >
              "Honestly, we threw you into the deep end — and you came back with
              a map."
            </Typography>
            <Box sx={{ margin: "2vw 0 0 0" }}>
              <Typography
                fontSize="1.04vw"
                fontWeight={400}
                color="#252525"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                This was a short, fast-paced project — but one that made a big
                impact. The Resource Management System is now live for internal
                use across teams, helping Managers and Admins stay on top of
                resource planning and allocation.
              </Typography>{" "}
            </Box>
            <Box sx={{ margin: "2vw 0 0 0" }}>
              <Typography
                fontSize="1.04vw"
                fontWeight={400}
                color="#252525"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <Box
                  component={"span"}
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.04vw",
                    color: "#252525",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  The current solution has already streamlined over 500+
                  resource requests and counting
                </Box>{" "}
                — reducing manual tracking and saving hours of operational
                effort.
              </Typography>{" "}
            </Box>
            <Box sx={{ margin: "2vw 0 0 0" }}>
              <Box
                component={"span"}
                sx={{
                  fontWeight: 600,
                  fontSize: "1.04vw",
                  color: "#252525",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                The next phases are already in motion, focused on unlocking even
                more value:
              </Box>{" "}
              <Typography
                fontSize="1.04vw"
                fontWeight={400}
                color="#252525"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                — Enhanced Forecasting Capabilities
              </Typography>{" "}
              <Typography
                fontSize="1.04vw"
                fontWeight={400}
                color="#252525"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                — Visual Reporting Dashboards
              </Typography>{" "}
              <Typography
                fontSize="1.04vw"
                fontWeight={400}
                color="#252525"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                — Resource Governance Workflows
              </Typography>{" "}
            </Box>
            <Box sx={{ margin: "2vw 0 0 0" }}>
              <Typography
                fontSize="1.04vw"
                fontWeight={400}
                color="#252525"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                The design framework I built is intentionally scalable — making
                room for future add-ons like bulk actions, advanced resource
                analytics, automated notifications, and smart nudges to guide
                better decision-making.
              </Typography>{" "}
              <Box
                component={"span"}
                sx={{
                  fontWeight: 600,
                  fontSize: "1.04vw",
                  color: "#FE441D",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                A small window of 3 weeks — but a system built to go the
                distance.
              </Box>{" "}
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
      </Box>
    </Box>
  );
};

export default CaseStudyThree;
