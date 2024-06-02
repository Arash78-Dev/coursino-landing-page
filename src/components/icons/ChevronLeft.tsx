import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";

const ChevronLeft: FC<IconProps> = (props) => {
  return (
    <Icon
      {...props}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="42"
        y="42"
        width="42"
        height="42"
        rx="21"
        transform="rotate(180 42 42)"
        fill="white"
      />
      <path
        d="M23.4 25.8L18.6 21L23.4 16.2"
        stroke="#070F1C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ChevronLeft;
