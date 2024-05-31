import { Box, Button, Center, HStack, Link, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import banner from "../../../public/assets/images/banner.svg";
import FleshDown from "@/icons/FleshDown";
import scrollingToWhere from "@/utils/scrollingToWhere";

const DivooneBazzi: FC = () => {
  return (
    <Box h="450" position="relative" w="100%">
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
        }}
        objectFit="cover"
      />

      <VStack justify="center" h="full" fontSize="26px" spacing={1}>
        <Center zIndex="1000">کنکور ۱۴۰۴ قراره بهت هیجان بده.</Center>
        <Center zIndex="1000">ما اسمش رو گذاشتیم «دیوونه‌بازی»!</Center>
        <Center zIndex="1000">بیا پایین‌تر تا متوجه بشی</Center>

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
