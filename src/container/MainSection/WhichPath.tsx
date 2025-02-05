import {
  HStack,
  Link,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import riazi from "../../../public/assets/images/riazi.png";
import riazi_back from "../../../public/assets/images/riazi_back.png";
import tajrobi from "../../../public/assets/images/tajrobi.webp";
import tajrobi_back from "../../../public/assets/images/tajrobi_back.webp";
import ensani from "../../../public/assets/images/ensani.webp";
import ensani_back from "../../../public/assets/images/ensani_back.webp";
import honar from "../../../public/assets/images/honar.webp";
import honar_back from "../../../public/assets/images/honar_back.webp";
import flag from "../../../public/assets/images/flag.webp";
import car2 from "../../../public/assets/images/car2.png";
import BaseButton from "@/components/BaseButton";
import scrollingToWhere from "@/utils/scrollingToWhere";
import FlipAnimation from "@/components/FlipAnimation";

const WhichPath: FC = () => {
  const flagPicture = useBreakpointValue({
    base: 300,
    md: 300,
    xl: 400,
  });
  return (
    <VStack
      w={{ base: "85%", lg: "95%", xl: "80%" }}
      mx="auto"
      color="white"
      spacing={9}
    >
      <Text
        fontSize={{
          base: "24px",
          sm: "28px",
          md: "32px",
          lg: "36px",
          xl: "48px",
        }}
        textAlign="center"
        fontWeight="bold"
      >
        از کدوم مسیر وارد این رقابت می‌شی؟
      </Text>

      <Stack direction={{ base: "column", lg: "row" }}>
        <FlipAnimation frontScr={riazi} backScr={riazi_back} alt="riazi" />

        <FlipAnimation
          frontScr={tajrobi}
          backScr={tajrobi_back}
          alt="tajrobi"
        />

        <FlipAnimation frontScr={ensani} backScr={ensani_back} alt="ensani" />

        <FlipAnimation frontScr={honar} backScr={honar_back} alt="honar" />
      </Stack>

      <VStack spacing="-2px !important">
        <Image
          src={flag}
          alt="flag"
          width={flagPicture}
          height={700}
          style={{ zIndex: "100" }}
        />

        <Text
          fontWeight="bold"
          fontSize={{
            base: "24px",
            sm: "28px",
            md: "32px",
            lg: "36px",
            xl: "48px",
          }}
          mt="-30px"
          textAlign="center"
        >
          پرچم بالاست!
        </Text>
      </VStack>

      <VStack>
        <Text
          fontSize={{
            base: "16px",
            sm: "20px",
            md: "24px",
            lg: "28px",
            xl: "32px",
          }}
          textAlign="center"
        >
          دیوونه بازی یعنی ...
        </Text>
        <Text
          fontSize={{
            base: "24px",
            sm: "28px",
            md: "32px",
            lg: "36px",
            xl: "42px",
          }}
          textAlign="center"
        >
          امسال به قیمت پارسال توی دوره ثبت نام می کنی!
        </Text>
        <Text
          fontSize={{
            base: "16px",
            sm: "20px",
            md: "24px",
            lg: "28px",
            xl: "32px",
          }}
          textAlign="center"
        >
          فقط شروع کن
        </Text>
      </VStack>

      <BaseButton
        zIndex="10000"
        onClick={() => scrollingToWhere()}
        size="lg"
        py={2}
      >
        شروع دیوونه‌بازی
      </BaseButton>

      <Image
        src={car2}
        alt="car2"
        width={1200}
        height={700}
        style={{ zIndex: "100" }}
      />
    </VStack>
  );
};

export default WhichPath;
