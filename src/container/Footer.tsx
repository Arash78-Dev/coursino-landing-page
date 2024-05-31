import {
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FC } from "react";
import bg from "../../public/assets/images/bg-main-section1.svg";
import tire from "../../public/assets/images/tire.svg";
import tiremobile from "../../public/assets/images/tiremobile.svg";
import logo from "../../public/assets/images/logo.svg";
import Image from "next/image";
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";

const Footer: FC = () => {
  const breakpoint = useBreakpoint();
  const tiresrc = useBreakpointValue({ base: tiremobile, lg: tire });

  const isBase = breakpoint === "base";
  const isSm = breakpoint === "sm";
  const isMd = breakpoint === "md";
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      py={16}
      spacing={8}
      bgGradient="linear(to-br ,#428FF7,#036AF5)"
      position="relative"
      w="full"
      id="porsline"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <VStack
        zIndex="1000"
        alignItems={{ base: "center", md: "stretch" }}
        w={{ base: "85%", sm: "60%", md: "50%", lg: undefined }}
      >
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={500}
          style={{ zIndex: "100" }}
        />

        <Text
          fontSize={{ base: "16px", md: "20px", lg: "24px" }}
          color="#0C1829"
          zIndex="1"
          textAlign="center"
        >
          برای دریافت مشاوره رایگان کلاسینو و ثبت نام توی دوره،{" "}
          {isBase || isSm || isMd ? null : <br />} اطلاعات خودت رو وارد کن تا به
          سرعت باهات تماس بگیریم.
        </Text>
      </VStack>

      <VStack
        w={{ base: "85%", sm: "60%", md: "50%", lg: 1 / 4, xl: 1 / 5 }}
        zIndex="1000"
        spacing={4}
      >
        <BaseInput id="input-full-name" placeholder="نام و نام خانوادگی" />
        <BaseInput placeholder="شماره موبایل" />

        <BaseButton alignSelf={{ base: "center", lg: "end" }}>
          مشاوره رایگان می‌خوام
        </BaseButton>
      </VStack>

      <Image
        src={bg}
        alt="bg"
        fill={true}
        style={{ position: "absolute", left: 0, right: 0, height: "100%" }}
        objectFit="cover"
      />

      <Image
        src={tiresrc}
        alt="tire"
        fill={true}
        style={{ position: "absolute", left: 0, right: 0, height: "100%" }}
        objectFit="cover"
      />
    </Stack>
  );
};

export default Footer;
