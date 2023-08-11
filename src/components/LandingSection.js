import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avaImage from './../images/ava.png';

const greeting = "Hello, I am Anastasia!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#807a79"
  >
    <VStack spacing={16}>
      <Avatar
        src={avaImage}
        size='2xl'
        name='Anastasia' />

      <Heading as='h4' size='md' noOfLines={1}>{greeting}</Heading>
      <VStack>
        <Heading as='h1' size='3xl' noOfLines={1}>{bio1}</Heading>
        <Heading as='h1' size='3xl' noOfLines={1}>{bio2}</Heading>
      </VStack>

    </VStack>

  </FullScreenSection>
);

export default LandingSection;
