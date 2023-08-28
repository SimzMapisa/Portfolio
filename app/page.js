import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import RecentWork from "@/components/Home/RecentWork";
import Image from "next/image";
import React from "react";
import TechStack from "@/components/Home/TechStack";

const Home = () => {
  return (
    <>
      <Hero />
      <RecentWork />
      {/* <About /> */}
      <Services />
      <TechStack />
    </>
  );
};

export default Home;
