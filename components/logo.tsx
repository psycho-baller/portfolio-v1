import { motion } from "framer-motion";
import { logoR } from "../animations/logo";
import { logo } from "../animations/logo";
import { logoU } from "../animations/logo";
import { name } from "../animations/logo";

export default function Logo() {
  function returnHome() {
    window.location.href = "/";
  }

  return (
    <div
      tabIndex={0}
      onClick={returnHome}
      className="cursor-pointer w-6"
    >
      <motion.h1
        whileHover="hover"
        whileTap="tap"
        variants={logo}
        className="poppins whitespace-nowrap"
      >
        <picture>
          <motion.img
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={logoR}
            className="r inline-block"
            src="/logo/r.svg"
            alt="R"
          ></motion.img>
        </picture>
        <motion.span
          initial="hidden"
          animate="visible"
          variants={name}
          className="logo-name inline-block"
        >
          ami Maalo
        </motion.span>
        <picture>
          <motion.img
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={logoU}
            className="u inline-block"
            src="/logo/u.svg"
            alt="u"
          ></motion.img>
        </picture>
        <motion.span
          initial="hidden"
          animate="visible"
          variants={name}
          className="logo-name inline-block"
        >
          f
        </motion.span>
      </motion.h1>
    </div>
  );
}
