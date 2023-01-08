import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";

const ManualHeader = () => {
    const { enableWeb3, isWeb3Enabled, deactivateWeb3, account, Moralis } = useMoralis();
    const [currentBalance, setCurrentBalance] = useState("0");

    const { onAccountChanged, web3 } = Moralis;

    const web3ConnectionHandler = async () => {
        const res = await enableWeb3();

        if (!!res) {
            if (!!window.localStorage) {
                localStorage.setItem("connect", "Injected");
            }
        }
    };

    useEffect(() => {
        onAccountChanged((account) => {
            if (!account) {
                const disconnectWeb3 = async () => {
                    await deactivateWeb3();
                };

                if (!!window.localStorage) {
                    localStorage.removeItem("connect");
                    disconnectWeb3();
                }
            }
        });
    }, [onAccountChanged]);

    useEffect(() => {
        if (isWeb3Enabled) {
            return;
        }

        if (!!window.localStorage) {
            if (localStorage.getItem("connect") === "Injected") {
                web3ConnectionHandler();
            }
        }
    }, [account]);

    let connectBtn = (
        <button
            className="m-6 bg-green-500 px-8 py-2 rounded-md text-white font-bold hover:bg-green-700 shadow-black shadow-md cursor-pointer"
            onClick={web3ConnectionHandler}
        >
            Connect
        </button>
    );

    const getBalanceHandler = async (account) => {
        const balance = await web3.getBalance(account);
        setCurrentBalance(balance.toString());
    };

    if (!!account) {
        getBalanceHandler(account);
        connectBtn = (
            <div className="m-6 font-bold text-xl px-8 py-4 border-2 w-fit border-black rounded-md">
                <span className="text-2xl text-green-400">Connected To:</span>{" "}
                <span className="text-blue-400">
                    {account.slice(0, 6) + "..." + account.slice(account.length - 6, account.length)}
                </span>
                <span className="text-2xl text-green-400"> With Balance: </span>
                {ethers.utils.formatUnits(currentBalance, "ether").slice(0, 6)} ETH
            </div>
        );
    }

    return connectBtn;
};

export default ManualHeader;
