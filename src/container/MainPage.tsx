import Header from "@/container/Header";
import { Box, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const MainSection = dynamic(() => import("@/container/MainSection"));
const Footer = dynamic(() => import("@/container/Footer"));

const MainPage: NextPage = () => {
  return (
    <Box w="100vw" bg="#070F1C" overflow="hidden">
      <VStack
        as="main"
        w="full"
        h="full"
        spacing={0}
        overflow="auto"
        overflowX="hidden"
      >
        <Header />

        <MainSection />

        <Footer />
      </VStack>
    </Box>
  );
};

export default MainPage;
