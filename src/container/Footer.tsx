import {
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FC, MouseEventHandler, useState } from "react";
import bg from "../../public/assets/images/bg-main-section1.webp";
import tire from "../../public/assets/images/tire.webp";
import tiremobile from "../../public/assets/images/tiremobile.webp";
import logo from "../../public/assets/images/logo.webp";
import Image from "next/image";
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import axios from "axios";
import { useRouter } from "next/router";

interface Request {
  phone: string;
  landing_name: string;
  utm_source: string;
  utm_medium: string;
}

const url = "https://book.classino.com/api/landing";

const regex = /^\d*$/;
const phoneNumberRegex = /^(0|0098|\+98)(9[0-35-9]\d{8})$/;

const Footer: FC = () => {
  const [phone, setPhone] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);

  const { query, push } = useRouter();
  const breakpoint = useBreakpoint();
  const tiresrc = useBreakpointValue({ base: tiremobile, lg: tire });

  const isBase = breakpoint === "base";
  const isSm = breakpoint === "sm";
  const isMd = breakpoint === "md";

  const onSubmitHandler: MouseEventHandler<HTMLButtonElement> = () => {
    setIsSubmit(true);
    if (!phoneNumberRegex.test(phone)) return;

    const data: Request = {
      landing_name: "jame1404",
      utm_medium: (query.utm_medium as string) ?? "",
      utm_source: (query.utm_source as string) ?? "",
      phone: phone,
    };

    axios
      .post(url, data)
      .then(() => {
        push("https://student.classino.com/auth/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          textAlign={{ base: "center", lg: "start" }}
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
        <FormControl isInvalid={!phoneNumberRegex.test(phone) && isSubmit}>
          <BaseInput
            placeholder="شماره موبایل"
            value={phone}
            onChange={(event) => {
              const value = event.target.value;

              if (!regex.test(value)) return;
              setPhone(value);
            }}
          />

          <FormErrorMessage color="red.800">
            شماره موبایل را به درستی وارد نمایید.
          </FormErrorMessage>
        </FormControl>

        <BaseButton
          alignSelf={{ base: "center", lg: "end" }}
          onClick={onSubmitHandler}
        >
          مشاوره رایگان می‌خوام
        </BaseButton>
      </VStack>

      <Image
        src={bg}
        alt="bg"
        fill={true}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "100%",
          objectFit: "cover",
        }}
      />

      <Image
        src={tiresrc ?? ""}
        alt="tire"
        fill={true}
        style={{
          objectFit: "cover",
          position: "absolute",
          left: 0,
          right: 0,
          height: "100%",
        }}
      />
    </Stack>
  );
};

export default Footer;
