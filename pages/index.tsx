import { AnimateOnScroll } from "animate-on-scroll-framer";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { LegacyRef, useRef } from "react";
import FadeInSection from "../components/fadeInSection";
import FirstSection from "../components/firstsection";
import Hero from "../components/hero";

export interface refProp {
  Ref:LegacyRef<HTMLDivElement> | undefined
}

const Home: NextPage = () => {
  const fadeInSectionRef = useRef<HTMLDivElement>(null)
  const scaleInSectionRef = useRef<HTMLDivElement>(null) 
  const slideInSectionRef = useRef<HTMLDivElement>(null)

  return (
    <div className="bg-black">
      <Hero/>
      <FirstSection fadeInRef={fadeInSectionRef} scaleInRef={scaleInSectionRef} slideInRef={slideInSectionRef}/>
      <FadeInSection Ref={fadeInSectionRef}/>
    </div>
  );
};

export default Home;
