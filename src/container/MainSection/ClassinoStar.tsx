import StarCard from "@/components/StarCard";
import ChevronLeft from "@/components/icons/ChevronLeft";
import ChevronRight from "@/components/icons/ChevronRight";
import { Stars } from "@/utils/data";
import {
  Box,
  Button,
  Center,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, useEffect, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";

const ClassinoStar: FC = () => {
  const perView = useBreakpointValue({ base: 1, md: 2, xl: 3 });
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (
        swiperRef.current?.swiper.activeIndex ===
        Stars.length - (perView ?? 0)
      )
        {
          swiperRef.current.swiper.slideTo(0)
        }
      swiperRef.current?.swiper.slideNext();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Center w="100%" mb={12} zIndex="10000">
      <Stack
        direction={{ base: "column", lg: "row" }}
        w={{ base: "85%", lg: "95%", xl: "80%" }}
        mx="auto"
        bg="whiteAlpha.100"
        justify={{ base: "center", lg: "space-between" }}
        borderRadius="30px"
        spacing={6}
        py={4}
        px={{ base: 2, sm: 4, md: 8, xl: 12, "2xl": 24 }}
        h={400}
        backdropFilter="blur(32px)"
      >
        <Stack
          direction={{ base: "row", lg: "column" }}
          fontSize={{
            base: "24px",
            sm: "28px",
            md: "32px",
            lg: "36px",
            xl: "48px",
          }}
          color="white"
          justify="center"
          fontWeight="bold"
        >
          <Text>ستـــــارگان</Text>

          <Text>کلاسینـــــو</Text>
        </Stack>

        <HStack
          alignSelf="stretch"
          flex={1}
          justify="end"
          overflow="hidden"
          spacing={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5, "2xl": 6 }}
        >
          <Button
            variant="unstyled"
            onClick={() => {
              swiperRef.current?.swiper.slidePrev();
            }}
          >
            <ChevronRight boxSize={{ base: 8, md: 8, lg: 10 }} />
          </Button>

          <Box w="80%" overflow="hidden" h="full">
            <Swiper
              style={{ height: "100%", width: "100%" }}
              spaceBetween={10}
              slidesPerView={perView}
              ref={swiperRef}
            >
              {Stars.map((value) => (
                <SwiperSlide key={value.key} style={{ height: "100%" }}>
                  <StarCard
                    as={motion.div}
                    bg={value.bgColor}
                    avatar={value.avatarPath}
                    fullName={value.name}
                    job={value.job}
                    flex={1}
                    height="full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          <Button
            variant="unstyled"
            onClick={() => {
              swiperRef.current?.swiper.slideNext();
            }}
          >
            <ChevronLeft boxSize={{ base: 8, md: 8, lg: 10 }} />
          </Button>
        </HStack>
      </Stack>
    </Center>
  );
};

export default ClassinoStar;
