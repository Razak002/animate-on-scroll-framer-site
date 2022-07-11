import { AnimateOnScroll } from "animate-on-scroll-framer";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { LegacyRef, Ref, useRef } from "react";
import FadeInSection from "../components/fadeInSection";
import FirstSection from "../components/firstsection";
import Footer from "../components/footer";
import Hero from "../components/hero";
import ScaleInSection from "../components/scaleInSection";
import SlideInSections from "../components/slideInSections";

export interface refProp {
  Ref: LegacyRef<HTMLDivElement> | undefined;
}

const Home: NextPage = () => {
  const fadeInSectionRef = useRef<HTMLDivElement>(null);
  const scaleInSectionRef = useRef<HTMLDivElement>(null);
  const slideInSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black">
      <Head>
        <title>AOSF: Animate On Scroll Framer</title>
      </Head>
      <Hero />
      <FirstSection
        fadeInRef={fadeInSectionRef}
        scaleInRef={scaleInSectionRef}
        slideInRef={slideInSectionRef}
      />

      <FadeInSection Ref={fadeInSectionRef} />

      <ScaleInSection Ref={scaleInSectionRef} />

      <SlideInSections Ref={slideInSectionRef} />

      <Footer />
    </div>
  );
};

export default Home;
