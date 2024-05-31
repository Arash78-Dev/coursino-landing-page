import { Box, Card, CardProps, VStack } from "@chakra-ui/react";
import { FC } from "react";
import badgeBg from "../../public/assets/images/badgeBg.svg";
import Image from "next/image";

interface Props {
  avatar: string;
  fullName: string;
  job: string;
}

const StarCard: FC<Props & CardProps> = ({
  avatar,
  fullName,
  job,
  ...props
}) => {
  return (
    <Card borderRadius="24px" position="relative" overflow="hidden" {...props}>
      <Image
        src={badgeBg}
        alt="badgeBg"
        fill={true}
        style={{ position: "absolute", left: 0, right: 0, height: "100%" }}
        objectFit="cover"
      />

      <Image
        src={avatar}
        alt="avatar"
        fill={true}
        style={{ position: "absolute", left: 0, right: 0, height: "100%" }}
        objectFit="cover"
      />

      <VStack
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        h="25%"
        color="white"
        justify="center"
        background="#00000070"
        backdropFilter="blur(32px)"
      >
        <Box fontSize="18px">{fullName}</Box>
        <Box fontSize="18px" fontWeight="bold">
          {job}
        </Box>
      </VStack>
    </Card>
  );
};

export default StarCard;
