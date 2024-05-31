import { HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import car from "../../../public/assets/images/car.svg";

const RootStory: FC = () => {
  return (
    <HStack
      h="70vh"
      w="80%"
      justifyContent="center"
      spacing={24}
      alignContent="center"
    >
      <Image
        src={car}
        alt="car"
        width={700}
        height={700}
        style={{ zIndex: "100" }}
      />

      <VStack color="white" spacing={12}>
        <Text fontWeight="bold" fontSize="48px">
          داستان از کجا شروع می‌شه؟
        </Text>

        <Text fontSize="24px">
          وقتی به کنکور فکر می‌کنیم ناخودآگاه استرس می‌گیریم، <br /> ضربان
          قلبمون می‌ره بالا و ... .<br />
          اگه قرار باشه خواننده موردعلاقه‌مون رو ببینیم هم <br /> استرس
          می‌گیریم؛ اما ما این استرس رو دوست داریم و <br /> بهش می‌گیم «هیجان».
        </Text>
      </VStack>
    </HStack>
  );
};

export default RootStory;
