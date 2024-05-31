import BaseButton from "@/components/BaseButton";
import { Box, Center, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import backgroundblue from "../../public/assets/images/backgroundblue.svg";
import takhtGaz from "../../public/assets/images/takhtGaz.svg";
import videopicture from "../../public/assets/images/videopicture.svg";
import Classino from "@/components/Classino";
import scrollingToWhere from "@/utils/scrollingToWhere";

const Header: FC = () => {
  return (
    <Box position="relative" height="80vh" w="full">
      <Image
        src={videopicture}
        alt="videopicture"
        fill={true}
        style={{ position: "absolute", left: 0, right: 0, height: "100%" }}
        objectFit="cover"
      />

      <Image
        src={backgroundblue}
        alt="videopicture"
        fill={true}
        style={{ position: "absolute", left: 0, right: 0, height: "100%" }}
        objectFit="cover"
      />

      <Classino
        bg="#FFAF20"
        color="black"
        h={12}
        w="full"
        position="absolute"
        bottom={-7}
        transform="rotate(-1.3deg)"
      />
      <Classino
        bg="#0369F4"
        color="white"
        h={12}
        w="full"
        position="absolute"
        bottom={-7}
        transform="rotate(1.3deg)"
      />

      <Center h="full">
        <VStack spacing={8} w={740}>
          <Image
            src={takhtGaz}
            alt="videopicture"
            width={500}
            height={500}
            style={{ zIndex: "100" }}
          />

          <Text fontSize="32px" color="white" zIndex="1" textAlign="center">
            قبل از اینکه جادۀ کنکور ۱۴۰۴ به دره برسه، با دورۀ آنلا‌ین جامع
            کلاسینو، مسیر درست رو انتخاب کن. آماده‌ای؟
          </Text>

          <BaseButton onClick={() => scrollingToWhere()}>
            شروع دیوونه‌بازی
          </BaseButton>
        </VStack>
      </Center>
    </Box>
  );
};

export default Header;
