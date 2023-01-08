import { ConnectButton } from "@web3uikit/web3";

const Header = () => {
    return (
        <div className="flex flex-row justify-between border-b-2 px-4 py-8 border-b-gray-300">
            <h1 className="text-4xl font-bold">Decentralized Lottery</h1>
            <ConnectButton moralisAuth={false} />
        </div>
    );
};

export default Header;
