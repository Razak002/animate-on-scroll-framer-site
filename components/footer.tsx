import { AnimateOnScroll } from "animate-on-scroll-framer";
import { motion } from "framer-motion";
import Image from "next/image";
import GITHUBLOGO from "../public/github.svg";
import NPMLOGO from "../public/npmlogo.png";

function Footer() {
  return (
    <div className="p-12 pb-4 portrait:p-8 text-white max-w-[1920px] m-auto">
      <AnimateOnScroll animation="flipIn" animateEachChild>
        <h1 className="text-[10vw] 2xl:text-[8vw] font-Philosopher">DID</h1>{" "}
        <h1 className="text-[10vw] 2xl:text-[8vw] font-Philosopher">
          YOU ENJOY
        </h1>
        <h1 className="text-[10vw] 2xl:text-[8vw] font-Philosopher">
          THE ANIMATIONS
        </h1>
      </AnimateOnScroll>

      <hr />

      <div className="flex flex-row portrait:flex-col-reverse my-20 font-Poppins">
        <AnimateOnScroll animation="fadeIn">
          <div className="landscape:w-1/2">
            <a
              href="https://www.npmjs.com/package/animate-on-scroll-framer"
              className="text-black hover:text-red-500 transition-all duration-500"
            >
              <div className="flex flex-row bg-white items-center justify-center w-80 h-24">
                <Image src={NPMLOGO} height={32} width={42} />
                <p className="ml-2">Use The Library In Your App</p>
              </div>
            </a>
          </div>
        </AnimateOnScroll>

        <br />

        <AnimateOnScroll animation="fadeIn" delay={1}>
          <div className="">
            <h3 className="text-xl font-semibold">
              Check out Animate On Scroll Framer
            </h3>

            <br />

            <p className="landscape:w-3/4 text-justify font-light">
              This library is relatively new so you can expect to run into some
              bugs. If you do run into any bugs you can feel free to open an
              issue or a PR
            </p>

            <br />

            <AnimateOnScroll animation="fadeIn" delay={1.5}>
              <a
                href="https://www.npmjs.com/package/animate-on-scroll-framer"
                className="bg-white  text-black hover:text-red-500 transition-all duration-500"
              >
                <motion.div className="flex flex-row bg-white items-center justify-center w-80 h-24">
                  <Image src={GITHUBLOGO} height={32} width={42} />
                  <p className="ml-2">Check It Out On Github</p>
                </motion.div>
              </a>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>
      </div>

      <hr />

      <div className="text-center font-Philosopher mt-4">
        <AnimateOnScroll animation="fadeIn">
          <p>MADE WITH JUNIOR DEVS IN MIND 👍</p>
        </AnimateOnScroll>
      </div>
    </div>
  );
}

export default Footer;
