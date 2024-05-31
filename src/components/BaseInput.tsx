import { Input, InputProps } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  placeholder: string;
}

const BaseInput: FC<Props & InputProps> = ({ placeholder, ...props }) => {
  return (
    <Input
      placeholder={placeholder}
      borderRadius="10px"
      {...props}
      bg="white"
      size="lg"
      outline="none"
      border="none"
    />
  );
};

export default BaseInput;
