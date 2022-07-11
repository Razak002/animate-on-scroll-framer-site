import { AnimateOnScroll } from "animate-on-scroll-framer";
import { motion } from "framer-motion";
import Image from "next/image";
import Image4 from "../public/image4.webp";
import Image5 from '../public/image5.webp'
import Image6 from '../public/image6.webp'
import { refProp } from "../pages";

function SlideInSections(props: refProp) {
  return (
    <div className="w-screen  font-Poppins">
      <div
        ref={props.Ref}
        className=" text-white max-w-[1920px] m-auto flex lg:flex-row p-12 portrait:p-8 portrait:flex-col"
      >
        <div className="lg:w-1/2 portrait:pb-8">
          <h2 className="text-2xl">
            <span className="opacity-50 text-6xl">03.</span> Slide Animations
          </h2>

          <br />

          <motion.p className="text-justify">
            These animations make any element that they wrap animate with a
            sliding animation. There are different kinds of slide in animations
            listed in the docs.
          </motion.p>
        </div>

        <div>
          <AnimateOnScroll animation="slideInRight">
            <Image src={Image4} height={350} width={700} alt="image4" />
          </AnimateOnScroll>
        </div>
      </div>

      <div className="bg-white p-12 portrait:p-8">
        <div className="max-w-[1920px] m-auto">
        <AnimateOnScroll animation="slideInLeft">
          <Image src={Image5} height={350} width={1000} alt='image5'/>
        </AnimateOnScroll>

        <br />

        <AnimateOnScroll animation="slideInUp">
          <div className="flex justify-end">
            <Image src={Image6} height={350} width={1000} alt='image6'/>
          </div>
        </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}

export default SlideInSections;
