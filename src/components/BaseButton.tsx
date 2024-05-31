import ArrowRight from "@/icons/ArrowRight";
import { Button, ButtonProps } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

const BaseButton: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      iconSpacing={1}
      fontSize="16px"
      borderRadius="36px"
      bgGradient="linear(to-tr, #FF7A00, #FFAF20)"
      transition="background 1s linear"
      _hover={{
        bgGradient: "linear(to-tr, #FFAF20, #FF7A00)",
      }}
      leftIcon={<ArrowRight boxSize={7} color="black" />}
      {...props}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
