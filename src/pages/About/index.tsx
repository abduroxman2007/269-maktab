// src/pages/About/index.tsx

import { lazy } from "react";
import AboutContent from "../../content/AboutContent.json"; // Load JSON data for content
import MissionContent from "../../content/MissionContent.json";
import "./style.css";

const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const About = () => {
  return (
    <Container>
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="about-icon.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="mission-icon.svg"
        id="mission"
      />
    </Container>
  );
};

export default About;
