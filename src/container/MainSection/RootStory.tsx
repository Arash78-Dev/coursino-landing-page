import {
  HStack,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import car from "../../../public/assets/images/car.svg";

const RootStory: FC = () => {
  const carImageSize = useBreakpointValue({
    base: 700,
    lg: 400,
    xl: 400,
    "2xl": 700,
  });

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      w={{ base: "85%", lg: "95%", xl: "80%" }}
      justifyContent="center"
      spacing={{ base: 12, lg: 24 }}
      alignContent="center"
      py={{ base: 12, lg: 24 }}
    >
      <Image
        src={car}
        alt="car"
        width={carImageSize}
        height={700}
        style={{ zIndex: "100" }}
      />

      <VStack color="white" spacing={{ base: 4, md: 8, xl: 12 }}>
        <Text
          fontWeight="bold"
          textAlign="center"
          fontSize={{
            base: "24px",
            md: "36px",
            lg: "32px",
            xl: "36px",
            "2xl": "48px",
          }}
        >
          داستان از کجا شروع می‌شه؟
        </Text>

        <Text
          fontSize={{
            base: "16px",
            sm: "20px",
            md: "24px",
            lg: "20px",
            xl: "24px",
          }}
          textAlign="center"
        >
          وقتی به کنکور فکر می‌کنیم ناخودآگاه استرس می‌گیریم، <br /> ضربان
          قلبمون می‌ره بالا و ... .<br />
          اگه قرار باشه خواننده موردعلاقه‌مون رو ببینیم هم <br /> استرس
          می‌گیریم؛ اما ما این استرس رو دوست داریم و <br /> بهش می‌گیم «هیجان».
        </Text>
      </VStack>
    </Stack>
  );
};

export default RootStory;
