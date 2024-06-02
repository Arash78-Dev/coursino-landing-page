import { Box, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, useState } from "react";

interface Props {
  frontScr: string | StaticImport;
  backScr: string | StaticImport;
  alt: string;
}

const FlipAnimation: FC<Props> = ({ alt, backScr, frontScr }) => {
  const [isHover, setIsHover] = useState(false);

  const pathPicture = useBreakpointValue({
    base: 200,
    "2xl": 300,
  });

  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      zIndex={100}
      position='relative'
    >
      <Box
        as={motion.div}
        animate={{ rotateY: isHover ? 180 : 0 }}
        style={{ backfaceVisibility: "hidden" }}
        position='absolute'
      >
        <Image src={frontScr} alt={alt} width={pathPicture} height={700} />
      </Box>

      <Box
        as={motion.div}
        animate={{ rotateY: isHover ? 0 : 180 }}
        style={{ backfaceVisibility: "hidden" }}
      
      >
        <Image src={backScr} alt={alt} width={pathPicture} height={700} />
      </Box>
    </Box>
  );
};

export default FlipAnimation;
