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
          <PopoverBody>
            This is my boook themed personal/portfolio website. If you have any
            suggestions on what I could do to improve my website, please feel
            free to contact me{" "}
            <a
              href="http://rami-maalouf.vercel.app/?goTo=contact"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-400 hover:animate-pulse"
            >
              the contact form at the end of the book
            </a>{" "}
            through the contact form at the end of the book or through email or
            linkedIn (links are in the cover page)
          </PopoverBody>
          <PopoverFooter>
            <a
              href="https://github.com/psycho-baller/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-400 hover:animate-pulse"
            >
              V1.1
            </a>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    );
};

export default InfoButton;