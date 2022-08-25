import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroCard from "../components/HeroCard";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="content">
      <Head>
        <title>Grêmio - Guimaraes Rosa</title>
      </Head>
      <Navbar />
      <HeroCard />
      <div className="divide-x-2 h-[1.5px] bg-gray-900" />
      <Features />
      <div className="divide-x-2 h-[1.5px] bg-gray-900" />
      <Footer />
    </div>
  );
};

export default Home;
