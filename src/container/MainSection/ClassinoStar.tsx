import StarCard from "@/components/StarCard";
import ChevronLeft from "@/icons/ChevronLeft";
import ChevronRight from "@/icons/ChevronRight";
import { Stars } from "@/utils/data";
import { Button, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

const ClassinoStar: FC = () => {
  return (
    <Center w="100%" mb={12} zIndex='10000'>
      <HStack
        w="80%"
        bg="whiteAlpha.100"
        justify="space-between"
        borderRadius="30px"
        py={4}
        px={24}
        h={400}
        backdropFilter="blur(32px)"
      >
        <VStack fontSize="48px" color="white" fontWeight="bold">
          <Text>ستـــــارگان</Text>

          <Text>کلاسینـــــو</Text>
        </VStack>

        <HStack alignSelf="stretch">
          <Button variant="unstyled">
            <ChevronRight boxSize={10} />
          </Button>

          <HStack h="full" alignItems="stretch">
            {Stars.map((value) => (
              <StarCard
                w={64}
                key={value.key}
                bg={value.bgColor}
                avatar={value.avatarPath}
                fullName={value.name}
                job={value.job}
              />
            ))}
          </HStack>

          <Button variant="unstyled">
            <ChevronLeft boxSize={10} />
          </Button>
        </HStack>
      </HStack>
    </Center>
  );
};

export default ClassinoStar;
