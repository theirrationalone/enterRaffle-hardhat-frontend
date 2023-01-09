import Head from "next/head";

// import ManualHeader from "../components/ManualHeader";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";

export default function Home() {
    return (
        <>
            <Head>
                <title>Raffle DAPP</title>
                <meta name="description" content="Raffle Hardhat Decentralized app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            {/* <ManualHeader /> */}
            <Header />
            <LotteryEntrance />
        </>
    );
}
