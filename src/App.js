import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about_me";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import MainLayout from "./components/MainLayout";
import { Box } from "@mui/material";
import CaseStudyOne from "./pages/CaseStudies/CaseStudy1";
import CaseStudyTwo from "./pages/CaseStudies/CaseStudy2";
import CaseStudyThree from "./pages/CaseStudies/CaseStudy3";
import ScrollToTop from "./components/ScrollTop";
function App() {
  return (
    <Box sx={{ maxHeight: "100%", maxWidth: "100%" }}>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />}>
              <Route index element={<CaseStudyOne />} />
              <Route path="case-study-1" element={<CaseStudyOne />} />
              <Route path="case-study-2" element={<CaseStudyTwo />} />
              <Route path="case-study-3" element={<CaseStudyThree />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Route>
        </Routes>
      </HashRouter>
    </Box>
  );
}

export default App;
