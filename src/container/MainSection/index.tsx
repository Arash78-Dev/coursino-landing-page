import { Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import bg from "../../../public/assets/images/bg-main-section.svg";
import bgMobile from "../../../public/assets/images/BG (3).svg";
import RootStory from "@/container/MainSection/RootStory";
import DivooneBazzi from "@/container/MainSection/DivooneBazzi";
import WhichPath from "@/container/MainSection/WhichPath";
import ClassinoStar from "@/container/MainSection/ClassinoStar";

const MainSection: FC = () => {
  const bgSrc = useBreakpointValue({ base: bgMobile, lg: bg });

  return (
    <VStack w="full" position="relative" overflow="hidden">
      <Image
        src={bgSrc}
        alt="bg"
        fill={true}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "100%",
        }}
        objectFit="cover"
        priority={true}
      />

      <RootStory />

      <DivooneBazzi />

      <WhichPath />

      <ClassinoStar />
    </VStack>
  );
};

export default MainSection;
