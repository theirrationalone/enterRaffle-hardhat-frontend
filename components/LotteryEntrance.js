import { useEffect, useState } from "react";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { useNotification } from "@web3uikit/core";
import { Bell } from "@web3uikit/icons";

import { contractAbi, contractAddresses } from "../constants";
import { ethers } from "ethers";

const LotteryEntrance = () => {
    const [currentEntranceFee, setCurrentEntranceFee] = useState("0");
    const [lotteryBalance, setLotteryBalance] = useState("0");
    const [numPlayers, setNumPlayers] = useState("0");
    const [recentWinner, setRecentWinner] = useState("0x00");
    const { chainId: chainIdHex, Moralis } = useMoralis();

    const { web3 } = Moralis;

    const chainId = parseInt(chainIdHex).toString();

    const contractAddress = contractAddresses[chainId] ? contractAddresses[chainId][0] : null;

    const dispatch = useNotification();

    useEffect(() => {
        console.log(
            "\x1b[31m%s\x1b[0m",
            "Check this message on app's logs if the counts of this log keep increasing then, Your Application is in Trouble, Right now it seems that your Dapp is in an infinite loop... "
        );
    });

    const {
        runContractFunction: enterRaffle,
        isFetching,
        isLoading,
    } = useWeb3Contract({
        abi: contractAbi,
        contractAddress: contractAddress,
        params: "",
        functionName: "enterRaffle",
        msgValue: currentEntranceFee,
    });

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: contractAbi,
        contractAddress: contractAddress,
        functionName: "getEntranceFee",
        params: "",
    });

    const { runContractFunction: getPlayersLength } = useWeb3Contract({
        abi: contractAbi,
        contractAddress: contractAddress,
        params: "",
        functionName: "getPlayersLength",
    });

    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi: contractAbi,
        contractAddress: contractAddress,
        functionName: "getRecentWinner",
        params: "",
    });

    const getLotteryBalance = async () => {
        if (!!web3) {
            const lotteryBal = await web3.getBalance(contractAddress);
            setLotteryBalance(lotteryBal.toString());
        }
    };

    const updateUI = async () => {
        const entranceFee = await getEntranceFee();
        if (!!entranceFee) {
            setCurrentEntranceFee(entranceFee.toString());
        }

        await getLotteryBalance();

        const playersLen = await getPlayersLength();
        if (!!playersLen) {
            setNumPlayers(playersLen.toString());
        }

        const winner = await getRecentWinner();

        if (!!winner) {
            setRecentWinner(winner.toString());
        }
    };

    useEffect(() => {
        updateUI();
    }, [getEntranceFee, getPlayersLength, getRecentWinner]);

    const notificationHandler = () => {
        dispatch({
            position: "topR",
            type: "success",
            message: "Transaction Confirmed!",
            title: "Raffle Enter",
            icon: <Bell />,
        });
    };

    const raffleSuccessHandler = async (tx) => {
        await tx.wait(1);
        await updateUI();
        notificationHandler();
    };

    const raffleErrorHandler = () => {
        dispatch({
            position: "topR",
            type: "error",
            title: "enterRaffle Failed",
            message: "Transaction Failed, Open Logs!",
            icon: <Bell color="red" />,
            iconColor: "red",
        });
    };

    const enterRaffleHandler = async () => {
        await enterRaffle({
            onSuccess: raffleSuccessHandler,
            onError: raffleErrorHandler,
        });
    };

    return (
        <div className="px-4 py-6 m-4">
            <h1 className="text-xl text-gray-400 py-2">
                Entrance Fee:{" "}
                <span className="text-xl text-blue-700">
                    {ethers.utils.formatUnits(currentEntranceFee, "ether")} ETH
                </span>
            </h1>
            <h1 className="text-xl text-gray-400 py-2">
                Current Lottery Value:{" "}
                <span className="text-xl text-blue-700">{ethers.utils.formatUnits(lotteryBalance, "ether")} ETH</span>
            </h1>
            <h1 className="text-xl text-gray-400 py-2">Players(Stakers) Involved into Lottery: {numPlayers}</h1>
            <button
                className="text-white font-bold py-4 px-8 bg-violet-700 rounded-md hover:bg-violet-900"
                onClick={enterRaffleHandler}
                disabled={isFetching || isLoading}
            >
                {isLoading || isFetching ? (
                    <div className="animate-spin border border-white w-10 h-10 border-t-2 rounded-full"></div>
                ) : (
                    "Enter Raffle"
                )}
            </button>
            <h1 className="text-xl text-green-400 py-2 font-bold">Recent Winner: {recentWinner}</h1>
        </div>
    );
};

export default LotteryEntrance;
