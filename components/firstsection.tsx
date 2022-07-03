import { AnimateOnScroll } from "animate-on-scroll-framer";
import Image from "next/image";
import Link from "next/link";
import Image1 from "../public/image1.webp";
import Arrow from "../public/arrow.svg";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { RefObject, useId, useRef } from "react";

interface Props {
  fadeInRef: RefObject<HTMLDivElement> | undefined;
  slideInRef: RefObject<HTMLDivElement> | undefined;
  scaleInRef: RefObject<HTMLDivElement> | undefined;
}

export default function FirstSection({
  fadeInRef,
  slideInRef,
  scaleInRef,
}: Props) {
  let x = useMotionValue(0);
  let y = useMotionValue(0);

  function handleParallax(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const offsetX = event.pageX / 20;
    const offsetY = event.pageY / 20;
    x.set(offsetX);
    y.set(offsetY);
  }

  let xMotion = useSpring(x, { stiffness: 300, damping: 90 });
  let yMotion = useSpring(y, { stiffness: 300, damping: 90 });

  return (
    <motion.div
      onMouseMove={handleParallax}
      className="flex flex-row w-screen m-auto max-w-[1920px] p-8 h-screen justify-around items-center portrait:h-full portrait:flex-col text-white"
    >
      <div className="flex flex-col w-1/2 portrait:w-full portrait:pb-16">
        <p className="text-base font-Poppins text-justify">
          A simple scroll animation library made to simplify appear on scroll
          animations for both beginner and expert developers alike. It was built
          using framer motion as the basis for the animations.
        </p>
        <br />
        <br />
        <ul>
          <a
            onClick={() =>
              fadeInRef?.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-2xl py-4 hover:text-red-500 transition-all duration-500"
          >
            <div className="w-full border-b-2 justify-between flex border-white cursor-pointer hover:border-red-500">
              1. Fade Animations
              <Image src={Arrow} height={12} width={12} alt="arrow" />
            </div>
          </a>
          <br />
          <a
            onClick={() =>
              scaleInRef?.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-2xl py-4 hover:text-red-500 transition-all duration-500"
          >
            <div className="w-full border-b-2 justify-between flex border-white cursor-pointer hover:border-red-500">
              2. Scale Animations
              <Image src={Arrow} height={12} width={12} alt="arrow" />
            </div>
          </a>
          <br />
          <a
            onClick={() =>
              slideInRef?.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-2xl hover:text-red-500 transition-all duration-500"
          >
            <div className="w-full border-b-2 justify-between flex cursor-pointer border-white hover:border-red-500">
              3. Slide Animations
              <Image src={Arrow} height={12} width={12} alt="arrow" />
            </div>
          </a>
        </ul>
      </div>
      <motion.div style={{ x: xMotion, y: yMotion }}>
        <AnimateOnScroll animation="fadeInRight" duration={1}>
          <Image src={Image1} alt="Image1" height={740} width={600} />
        </AnimateOnScroll>
      </motion.div>
    </motion.div>
  );
}
