import { AnimateOnScroll } from "animate-on-scroll-framer";
import Image from "next/image";
import { LegacyRef, MutableRefObject } from "react";
import { refProp } from "../pages";
import Image2 from "../public/image2.webp";
import Circle1 from "../public/circle1.png";
import Circle2 from "../public/circle2.png";
import Circle3 from "../public/circle3.png";
import { motion, useDragControls } from "framer-motion";

export default function FadeInSection({ Ref }: refProp) {
  
  return (
    <div className="bg-white font-Poppins text-justify" ref={Ref}>
      <motion.div
        id="fadeInSection"
        className="flex flex-row max-w-[1920px] w-screen portrait:flex-col p-8 justify-around items-center m-auto"
      >
        <motion.div className="p-4 border-2 border-black">
          <AnimateOnScroll animation="fadeInLeft" duration={2}>
            <Image src={Image2} height={740} width={600} alt="image2" />
          </AnimateOnScroll>
        </motion.div>

        <div className="landscape:w-1/2 portrait:pt-4 landscape:p-8 h-full">
          <h2 className="text-2xl">
            <span className="opacity-50 text-6xl">01.</span> Fade Animations
          </h2>

          <br />

          <motion.p>
            Each element which has any of these (fadeIn, fadeInUp, fadeInDown,
            fadeInRight, fadeInLeft) values as the animation type will fade in
            the way described.
          </motion.p>

          <AnimateOnScroll animation="fadeInUp" duration={2}>
            <motion.div whileHover={{scale:1.1}} className="flex flex-row justify-end">
              <Image src={Circle1} height={150} width={150} alt="circle1" />
            </motion.div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInDown" duration={2} delay={1}>
            <motion.div whileHover={{scale:1.1}} className="flex flex-row justify-center ">
              <Image src={Circle2} height={150} width={150} alt="circle1" />
            </motion.div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeIn" duration={2} delay={2}>
            <motion.div whileHover={{scale:1.1}} className="flex flex-row justify-start ">
              <Image src={Circle3} height={150} width={150} alt="circle1" />
            </motion.div>
          </AnimateOnScroll>
        </div>
      </motion.div>
    </div>
  );
}
