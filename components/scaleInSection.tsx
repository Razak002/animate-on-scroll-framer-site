import { refProp } from "../pages";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import Image from "next/image";
import Image3 from "../public/image3.webp";

function ScaleInSection({ Ref }: refProp) {
  return (
    <div
      ref={Ref}
      className="bg-white font-Poppins -m-1 w-screen"
    >
      <div className="p-12 portrait:p-8 max-w-[1920px] m-auto">
        {" "}
        <div className="m-auto landscape:w-4/5">
          <h2 className="text-2xl">
            <span className="opacity-50 text-6xl">02.</span> Scale Animations
          </h2>

          <br />

          <motion.p className="landscape:w-1/2 text-justify">
            This animation is very different from the fade in animations above.
            They scale in according to the value of the animation type.
          </motion.p>
        </div>
        <br />
        <AnimateOnScroll animation="scaleIn">
          <motion.div
            whileHover={{
              boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.5)",
              scale: 1.02,
            }}
            className=""
          >
            <Image src={Image3} height={800} width={1920} alt="image 2" />
          </motion.div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}

export default ScaleInSection;
