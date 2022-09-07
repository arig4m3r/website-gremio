import type { NextPage } from "next";
import Head from "next/head";
import Divider from "../components/Divider";
import Features from "../components/Features";
import HeroCard from "../components/HeroCard";

import "../public/messaging_init_in_sw";

const Home: NextPage = () => {
  return (
    <div className="content">
      <Head>
        <title>Grêmio - Guimaraes Rosa</title>
      </Head>

      <HeroCard />
      <Divider />
      <Features />
      <Divider />
    </div>
  );
};

export default Home;
