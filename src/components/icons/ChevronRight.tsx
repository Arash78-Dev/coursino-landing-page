import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";

const ChevronRight: FC<IconProps> = ({...props}) => {
  return (
    <Icon {...props} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="42" height="42" rx="21" fill="white" />
      <path
        d="M18.6 16.2L23.4 21L18.6 25.8"
        stroke="#070F1C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
};

export default ChevronRight;
