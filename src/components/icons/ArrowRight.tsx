import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";

const ArrowRight: FC<IconProps> = ({ ...props }) => {
  return (
    <Icon
      {...props}
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.83333 7.625L13 12M13 12L8.83333 16.375M13 12L3 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ArrowRight;
