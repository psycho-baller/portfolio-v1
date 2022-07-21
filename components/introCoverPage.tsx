import { forwardRef } from "react";
import { Heading, Container, Text, IconButton, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { EmailIcon } from "@chakra-ui/icons";
import { AiFillGithub } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
interface introCoverProps {
  children: React.ReactNode;
}

const IntroCoverPage = forwardRef((props: introCoverProps, ref: any) => {
  const ferrisOfTraits = [
    "Web Developer",
    "Creative",
    "Passionate",
    "Energetic",
    "Weirdo",
  ];

  const ferrisOfTechs = [
    "next-js.png",
    "react-js.svg",
    "typescript.svg",
    "python.svg",
    "java.svg",
    "sqlite.svg",
    "jupyter.svg",
    "node-js.svg",
    "firebase.svg",
    "mongodb.svg",
    "tailwindcss.svg",
    "chakra-ui.jpg",
    "framer-motion.webp",
    "html.svg",
    "scss.svg",
  ];

  return (
    <Container ref={ref} data-density="hard" className="overflow-hidden">
      <Heading>{props.children}</Heading>
      <VStack className="absolute left-0 right-0">
        <a href="mailto:rami.rami@ucalgary.ca">
          <IconButton
            variant="outline"
            colorScheme="yellow"
            aria-label="Send email"
            icon={<EmailIcon />}
          />
        </a>
        <a href="https://github.com/psycho-baller">
          <IconButton
            variant="outline"
            colorScheme="yellow"
            aria-label="Send email"
            icon={<AiFillGithub />}
          />
        </a>
        <a href="https://www.linkedin.com/in/rami--maalouf/">
          <IconButton
            variant="outline"
            colorScheme="yellow"
            aria-label="Send email"
            icon={<RiLinkedinFill />}
          />
        </a>
      </VStack>

      {ferrisOfTraits.map((trait, index: number) => {
        return (
          <motion.div
            key={index + 1}
            className="ferris-wheel"
            initial="initial"
            animate={["animate", "initialHide"]}
            exit="exit"
            variants={{
              animate: {
                rotate: 360,
                transition: {
                  duration: ferrisOfTraits.length,
                  loop: Infinity,
                  delay: index + 1,
                  // ease: "linear",
                },
              },
              initial: {
                opacity: 0,
              },
              initialHide: {
                opacity: 1,
                transition: {
                  delay: index + 1,
                },
              },
            }}
          >
            <Text className="left-center">{trait}</Text>
          </motion.div>
        );
      }, [])}

      {ferrisOfTechs.map((tech, index: number) => {
        return (
          <motion.div
            className="ferris-wheel-techs"
            key={index + 1}
            initial="initial"
            animate={["animate", "initialHide"]}
            exit="exit"
            variants={{
              animate: {
                rotate: -360,
                transition: {
                  duration: ferrisOfTechs.length,
                  loop: Infinity,
                  delay: index + 1,
                  ease: "linear",
                },
              },
              initial: {
                opacity: 0,
              },
              initialHide: {
                opacity: 1,
                transition: {
                  delay: index + 1,
                },
              },
            }}
          >
            <div className="right-center">
              <Image
                src={`/tech-icons/${tech}`}
                alt={tech}
                width={50}
                height={50}
              />
            </div>
          </motion.div>
        );
      }, [])}
    </Container>
  );
});
IntroCoverPage.displayName = "IntroCoverPage";
export default IntroCoverPage;
