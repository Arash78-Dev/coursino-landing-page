import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import riazi from "../../../public/assets/images/riazi.svg";
import tajrobi from "../../../public/assets/images/tajrobi.svg";
import ensani from "../../../public/assets/images/ensani.svg";
import honar from "../../../public/assets/images/honar.svg";
import flag from "../../../public/assets/images/flag.svg";
import car2 from "../../../public/assets/images/car2.svg";
import BaseButton from "@/components/BaseButton";
import scrollTo from "@/utils/scrollingToWhere";
import scrollingToWhere from "@/utils/scrollingToWhere";

const WhichPath: FC = () => {
  return (
    <VStack h="180vh" color="white" spacing={9}>
      <Text fontSize="48px" fontWeight="bold">
        از کدوم مسیر وارد این رقابت می‌شی؟
      </Text>

      <HStack>
        <Image
          src={riazi}
          alt="riazi"
          width={300}
          height={700}
          style={{ zIndex: "100" }}
        />

        <Image
          src={tajrobi}
          alt="tajrobi"
          width={300}
          height={700}
          style={{ zIndex: "100" }}
        />

        <Image
          src={ensani}
          alt="ensani"
          width={300}
          height={700}
          style={{ zIndex: "100" }}
        />

        <Image
          src={honar}
          alt="honar"
          width={300}
          height={700}
          style={{ zIndex: "100" }}
        />
      </HStack>

      <VStack spacing="-2px !important">
        <Image
          src={flag}
          alt="flag"
          width={400}
          height={700}
          style={{ zIndex: "100" }}
        />

        <Text fontWeight="bold" fontSize="48px" mt="-30px">
          پرچم بالاست!
        </Text>
      </VStack>

      <VStack>
        <Text fontSize="32px">دیوونه بازی یعنی ...</Text>
        <Text fontSize="42px">
          امسال به قیمت پارسال توی دوره ثبت نام می کنی!
        </Text>
        <Text fontSize="32px">فقط شروع کن</Text>
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
