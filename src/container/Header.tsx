import BaseButton from "@/components/BaseButton";
import {
  Box,
  Center,
  Link,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import backgroundblue from "../../public/assets/images/backgroundblue.svg";
import takhtGaz from "../../public/assets/images/takhtGaz.svg";
import videoWebpicture from "../../public/assets/video/Header_Desktop.gif";
import videoMobilepicture from "../../public/assets/video/Header_Phone.gif";
import Classino from "@/components/Classino";
import scrollingToWhere from "@/utils/scrollingToWhere";
import { motion } from "framer-motion";

const Header: FC = () => {
  const videoSrc = useBreakpointValue({
    base: videoMobilepicture,
    lg: videoWebpicture,
  });

  return (
    <Box
      position="relative"
      height={{
        base: 400,
        sm: 500,
        md: 600,
        lg: 700,
        xl: 800,
      }}
      w="full"
    >
      <Image
        src={videoSrc ?? ""}
        alt="videopicture"
        fill={true}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "100%",
          objectFit: "cover",
        }}
       
        unoptimized={true}
      />

      <Image
        src={backgroundblue}
        alt="backgroundblue"
        fill={true}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "100%",
          objectFit: "cover",
        }}
     
      />

      <Classino
        bg="#FFAF20"
        color="black"
        h={{ base: 8, sm: 10, lg: 12 }}
        w="full"
        position="absolute"
        bottom={-7}
        transform={{
          base: "rotate(-3.2deg)",
          sm: "rotate(-3deg)",
          md: "rotate(-2.5deg)",
          lg: "rotate(-2deg)",
          xl: "rotate(-1.3deg)",
        }}
      />
      <Classino
        bg="#0369F4"
        color="white"
        h={{ base: 8, sm: 10, lg: 12 }}
        w="full"
        position="absolute"
        bottom={-7}
        transform={{
          base: "rotate(3.2deg)",
          sm: "rotate(3deg)",
          md: "rotate(2.5deg)",
          lg: "rotate(2deg)",
          xl: "rotate(1.3deg)",
        }}
      />

      <Center h="full">
        <VStack
          spacing={8}
          w={{ base: 240, sm: 360, md: 480, lg: 600, xl: 740 }}
        >
          <motion.div
            style={{ zIndex: "100" }}
            initial={{ x: 1500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <Image
              src={takhtGaz}
              alt="takhtGaz"
              width={500}
              style={{ aspectRatio: 5 / 2 }}
              quality={10}
              placeholder="empty"
            />
          </motion.div>

          <Text
            fontSize={{
              base: "16px",
              sm: "20px",
              md: "24px",
              lg: "28px",
              xl: "32px",
            }}
            color="white"
            zIndex="1"
            textAlign="center"
          >
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
