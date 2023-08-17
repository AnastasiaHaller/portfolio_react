import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon",
    description:
      "This website showcased implementing a booking application on the Little Lemon Website",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Japona Kitchen",
    description:
      "An online food ordering application for the sushi restaurant",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Cost Accounting App",
    description:
      "Cost accounting app aims to report, analyze, and lead to the improvement of cost controls",
    getImageSrc: () => require("../images/photo3.png"),
  },
  {
    title: "Employees List",
    description:
      "A list of employees with several filters",
    getImageSrc: () => require("../images/photo4.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#ffc77d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
