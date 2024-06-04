import ClassinoStar from "@/container/MainSection/ClassinoStar";
import DivooneBazzi from "@/container/MainSection/DivooneBazzi";
import RootStory from "@/container/MainSection/RootStory";
import WhichPath from "@/container/MainSection/WhichPath";
import { VStack, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import bgMobile from "../../../public/assets/images/BG-_3_.webp";
import bg from "../../../public/assets/images/bg-main-section.webp";

const MainSection: FC = () => {
  const bgSrc = useBreakpointValue({ base: bgMobile, lg: bg });

  return (
    <VStack w="full" position="relative" overflow="hidden">
      <Image
        src={bgSrc ?? ""}
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

      <RootStory />

      <DivooneBazzi />

      <WhichPath />

      <ClassinoStar />
    </VStack>
  );
};

export default MainSection;
