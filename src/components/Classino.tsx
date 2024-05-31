import Star from "@/components/icons/Star";
import { Box, HStack, StackProps } from "@chakra-ui/react";
import { FC } from "react";

const array = new Array(30).fill(0, 0, 30);

const Classino: FC<StackProps> = ({ ...props }) => {
  return (
    <HStack {...props} zIndex="1000">
      {array.map((value, index) => {
        return (
          <HStack key={index} color={props.color}>
            <Box fontSize={{ base: "10px", sm: "11px" , md: "12px", lg: "13px", xl: "14px" }}>CLASSINO</Box>
            <Star boxSize={4} />
          </HStack>
        );
      })}
    </HStack>
  );
};

export default Classino;
