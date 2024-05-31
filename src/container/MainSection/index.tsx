import { Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import bg from "../../../public/assets/images/bg-main-section.svg";
import RootStory from "@/container/MainSection/RootStory";
import DivooneBazzi from "@/container/MainSection/DivooneBazzi";
import WhichPath from "@/container/MainSection/WhichPath";
import ClassinoStar from "@/container/MainSection/ClassinoStar";

const MainSection: FC = () => {
  return (
    <VStack w="full" position="relative" overflow="hidden">
      <Image
        src={bg}
        alt="bg"
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

      <RootStory />

      <DivooneBazzi />

      <WhichPath />

      <ClassinoStar />
    </VStack>
  );
};

export default MainSection;
