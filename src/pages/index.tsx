import type { NextPage } from "next";
import Head from "next/head";
import Board from "../components/board";
import Interpretation from "../components/interpretation"
import Motivation from "../components/motivation"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tarot</title>
        <meta name="description" content="A simple three card reading tarot board" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-serif overflow-x-hidden w-full h-screen">
        <Board />
        <Interpretation />
      </div>
    </>
  );
};

export default Home;
