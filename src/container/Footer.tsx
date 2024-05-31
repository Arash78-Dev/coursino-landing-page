import { HStack, Input, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import bg from "../../public/assets/images/bg-main-section1.svg";
import tire from "../../public/assets/images/tire.svg";
import logo from "../../public/assets/images/logo.svg";
import Image from "next/image";
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";

const Footer: FC = () => {
  return (
    <HStack
      h="40vh"
      bgGradient="linear(to-br ,#428FF7,#036AF5)"
      position="relative"
      w="full"
      id="porsline"
      justifyContent="space-evenly"
    >
      <VStack zIndex="1000" alignItems="stretch">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={500}
          style={{ zIndex: "100" }}
        />

        <Text fontSize="24px" color="#0C1829" zIndex="1" textAlign="center">
          برای دریافت مشاوره رایگان کلاسینو و ثبت نام توی دوره، <br /> اطلاعات
          خودت رو وارد کن تا به سرعت باهات تماس بگیریم.
        </Text>
      </VStack>

      <VStack w={1 / 5} zIndex="1000" spacing={4}>
        <BaseInput id="input-full-name" placeholder="نام و نام خانوادگی" />
        <BaseInput placeholder="شماره موبایل" />

        <BaseButton alignSelf="end">مشاوره رایگان می‌خوام</BaseButton>
      </VStack>

      <Image
        src={bg}
        alt="bg"
        fill={true}
        style={{ position: "absolute", left: 0, right: 0, height: "100%" }}
        objectFit="cover"
      />

      <Image
        src={tire}
        alt="tire"
        fill={true}
        style={{ position: "absolute", left: 0, right: 0, height: "100%" }}
        objectFit="cover"
      />
    </HStack>
  );
};

export default Footer;
