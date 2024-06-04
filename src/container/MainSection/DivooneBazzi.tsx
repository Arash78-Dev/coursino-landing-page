import FleshDown from "@/components/icons/FleshDown";
import scrollingToWhere from "@/utils/scrollingToWhere";
import { Box, Button, Center, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import banner from "../../../public/assets/images/banner.webp";

const DivooneBazzi: FC = () => {
  return (
    <Box
      height={{
        base: 300,
        sm: 350,
        md: 300,
        lg: 400,
        xl: 450,
      }}
      position="relative"
      w="100%"
    >
      <Image
        src={banner}
        alt="banner"
        fill={true}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "100%",
          zIndex: "100",
          objectFit: "cover",
        }}
      />

      <VStack
        justify="center"
        h="full"
        fontSize={{
          base: "16px",
          sm: "18px",
          md: "20px",
          lg: "22px",
          xl: "24px",
          "2xl": "26px",
        }}
        spacing={1}
        w={{ base: "85%", lg: "95%", xl: "80%" }}
        mx="auto"
      >
        <Center zIndex="1000" textAlign="center">
          کنکور ۱۴۰۴ قراره بهت هیجان بده.
        </Center>
        <Center zIndex="1000" textAlign="center">
          ما اسمش رو گذاشتیم «دیوونه‌بازی»!
        </Center>
        <Center zIndex="1000" textAlign="center">
          بیا پایین‌تر تا متوجه بشی
        </Center>

        <Center zIndex="1000">
          <Button onClick={() => scrollingToWhere()} variant="unstyled">
            <FleshDown />
          </Button>
        </Center>
      </VStack>
    </Box>
  );
};

export default DivooneBazzi;
