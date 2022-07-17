import { forwardRef } from "react";
import { Heading, Container, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ferrisWheel } from "../animations/introPage";
import Image from "next/image";
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
    "node-js.svg",

  ];

  return (
    <div ref={ref} data-density="hard" className="overflow-hidden">
      <Heading>{props.children}</Heading>
      {/* <div className="contact">
          <a href="mailto:rami.rami@ucalgary.ca">contact me</a>
        </div> */}
      {ferrisOfTraits.map((trait, index: number) => {
        return (
          <motion.div
            key={index}
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
                  delay: index,
                  // ease: "linear",
                },
              },
              initial: {
                opacity: 0,
              },
              initialHide: {
                opacity: 1,
                transition: {
                  delay: index,
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
            key={index}
            initial="initial"
            animate={["animate", "initialHide"]}
            exit="exit"
            variants={{
              animate: {
                rotate: -360,
                transition: {
                  duration: ferrisOfTechs.length,
                  loop: Infinity,
                  delay: index,
                  ease: "linear",
                },
              },
              initial: {
                opacity: 0,
              },
              initialHide: {
                opacity: 1,
                transition: {
                  delay: index,
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
                // layout="fill"
                // objectFit="cover"
                // quality={100}
              />

            </div>
          </motion.div>
        );
      }, [])}
    </div>
  );
});
IntroCoverPage.displayName = "IntroCoverPage";
export default IntroCoverPage;
