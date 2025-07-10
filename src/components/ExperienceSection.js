import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const experienceData = [
  {
    title: "Sr. UI/UX Engineer",
    company: "H&R Block India · Full-time",
    duration: "Apr 2023 – Present",
  },
  {
    title: "Chatbot conversation Designer",
    company: "Gray Matrix · Full-time",
    duration: "Nov 2021 – Mar 2023 · 1 yr 5 mos",
  },
  {
    title: "User Experience Consultant",
    company: "Botspice · Freelance",
    duration: "Dec 2020 – Nov 2021 · 1 yr",
  },
  {
    title: "Founder",
    company: "Raych Fashion and retail · Self-employed",
    duration: "Mar 2017 – Oct 2019 · 2 yrs 8 mos",
  },
  {
    title: "Freelance UI/UX expert",
    company: "Mediatoonz · Freelance",
    duration: "Feb 2016 – Jun 2017 · 1 yr 5 mos",
  },
  {
    title: "Visual Merchandiser",
    company: "Hopscotch.in · Full-time",
    duration: "Jan 2015 – Jul 2015 · 7 mos",
  },
  {
    title: "Management Intern",
    company: "CROSSWORD BOOK STORES · Internship",
    duration: "Mar 2015 – Apr 2015 · 2 mos",
  },
];

const ExperienceSection = () => {
  return (
    <Box px="1vw" py="3.5vw" fontFamily="Montserrat">
      <Stack sx={{ display: "flex", flexDirection: "column" , gap: "5vw" }}>
        {experienceData.map((item, index) => (
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: "1vw" }}
            key={index}
          >
            <Typography
              fontWeight={600}
              fontSize="1.04vw" // 20px ≈ 1.04vw
              letterSpacing="0.10vw" // 2px ≈ 0.10vw
              color="#252525"
              mb={1}
            >
              {item.title}
            </Typography>
            <Typography
              fontWeight={400}
              fontSize="1.04vw"
              letterSpacing="0.10vw"
              color="#252525"
            >
              - {item.company}
            </Typography>
            <Typography
              fontWeight={400}
              fontSize="1.04vw"
              letterSpacing="0.10vw"
              color="#252525"
            >
              - {item.duration}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ExperienceSection;
