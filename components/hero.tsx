import { AnimateOnScroll } from "animate-on-scroll-framer";
import { motion, motionValue, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import GithubSVG from "../public/github.svg";

export default function Hero() {
  const {scrollYProgress} = useViewportScroll()
  let scrollProg = scrollYProgress 
  const scale = useTransform(scrollYProgress, [0,1],[0.9,1.5])

  return (
    <div className="h-screen flex flex-col justify-between portrait:h-[calc(100vh/2)] max-w-[1920px] m-auto">
      <div className="absolute top-0 z-0">
        <div className="relative h-full w-full overflow-hidden">
        <motion.video style={{scale:scale}} src="/herovid.webm" autoPlay loop muted></motion.video>
        </div>
      </div>

      <div className="absolute landscape:p-16 p-8 landscape:pl-24">
        <a
          href="https://github.com/michaelessiet/animate-on-scroll-framer"
          target="_blank"
          rel="noreferrer"
          className="font-Poppins text-2xl flex hover:text-red-500 transition-all duration-500"
        >
          <Image src={GithubSVG} alt="Github" height={24} width={24} />
          GitHub
        </a>
      </div>

      <div className="h-1/2" />

      <div className="filter mix-blend-soft-light portrait:mix-blend-normal text-white p-8 landscape:pl-24">
        <AnimateOnScroll animation="flipIn" duration={2} animateEachChild>
          <h1 className="font-Philosopher text-[10vw] 2xl:text-[8vw] uppercase">
            Animate On
          </h1>
          <h1 className="font-Philosopher text-[10vw] 2xl:text-[8vw] uppercase">
            Scroll Framer
          </h1>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
