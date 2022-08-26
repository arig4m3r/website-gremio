import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Divider from "../components/Divider";
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
      <Divider />
      <Features />
      <Divider />
      <Footer />
    </div>
  );
};

export default Home;
