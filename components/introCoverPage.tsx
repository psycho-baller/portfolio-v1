import { forwardRef } from "react";
import { Heading, Container, Text, IconButton, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { EmailIcon } from "@chakra-ui/icons";
import { AiFillGithub } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { IoIosPaper } from "react-icons/io";
import Link from "next/link";
import {lClickables} from "../animations/clickables";

interface introCoverProps {
  children: React.ReactNode;
}

const IntroCoverPage = forwardRef((props: introCoverProps, ref: any) => {
  const ferrisOfTraits = [
    "Creative",
    "Passionate",
    "Energetic",
    "Weirdo",
    "Web Developer",
    "UCalgary Student",
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

  // const contactIcons = [
  //   {
  //     icon: <EmailIcon />,
  //     link: "mailto:rami.rami@ucalgary.ca",
  //     name: "Email",
  //     index: 0,
  //   },
  //   {
  //     icon: <AiFillGithub />,
  //     link: "https://github.com/psycho-baller",
  //     name: "Github",
  //     index: 1,
  //   },
  //   {
  //     icon: <RiLinkedinFill />,
  //     link: "https://www.linkedin.com/in/rami--maalouf/",
  //     name: "LinkedIn",
  //     index: 2,
  //   },
  // ];


  return (
    <Container ref={ref} data-density="hard" className="overflow-hidden">
      <Heading p={3}>{props.children}</Heading>
      <VStack spacing={2} className="absolute left-0 right-0">
        <motion.a
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          variants={lClickables}
          href="mailto:rami.rami@ucalgary.ca"
        >
          <IconButton
            variant="outline"
            colorScheme="yellow"
            aria-label="Send email"
            icon={<EmailIcon />}
          />
        </motion.a>
        <motion.a
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          variants={lClickables}
          href="https://github.com/psycho-baller"
        >
          <IconButton
            variant="outline"
            colorScheme="yellow"
            aria-label="github"
            icon={<AiFillGithub />}
          />
        </motion.a>
        <motion.a
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          variants={lClickables}
          href="https://www.linkedin.com/in/rami--maalouf/"
        >
          <IconButton
            variant="outline"
            colorScheme="yellow"
            aria-label="linkedin"
            icon={<RiLinkedinFill />}
          />
        </motion.a>
        <Link href="/resume.pdf" passHref>
          <motion.a
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            variants={lClickables}
            target="_blank"
          >
            <IconButton
              variant="outline"
              colorScheme="yellow"
              aria-label="resume"
              icon={<IoIosPaper />}
            />
          </motion.a>
        </Link>
      </VStack>

      {ferrisOfTraits.map((trait, index: number) => (
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
                repeat: Infinity,
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
      ))}

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
                  repeat: Infinity,
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
