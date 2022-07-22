import { IconButton } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
const InfoButton = () => {
    return (
      <Popover>
        <PopoverTrigger>
          <IconButton
            icon={<InfoIcon />}
            aria-label="Info"
            // size="4xs"
            fontSize={25}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Hey!</PopoverHeader>
          <PopoverBody>This is my boooked themed personal/portfolio website. If you have any suggestions on what I could do to improve my website, please feel free to contact me through the contact form at the end of the book or through email or linkedIn (links are in the cover page)</PopoverBody>
          <PopoverFooter>V1.0</PopoverFooter>
        </PopoverContent>
      </Popover>
    );
};

export default InfoButton;