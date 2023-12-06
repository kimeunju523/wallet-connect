import { useSDK } from "@metamask/sdk-react";
import { useState } from "react";

const App = () => {
  const { sdk } = useSDK();
  const [account, setAccount] = useState("");

  const onClickMetaMask = async () => {
    try {
      const accounts = await sdk?.connect();

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {account ? (
        <>
          <div>
            {" "}
            Hello,{account.substring(0, 7)}...
            {account.substring(account.length - 5)}
          </div>
          <button onClick={() => setAccount("")}>Logout</button>
        </>
      ) : (
        <button
          onClick={onClickMetaMask}
          className="bg-blue-600 text-white px-4 py-2 text-lg rounded-full"
        >
          🦊 MetaMask Login
        </button>
      )}
    </div>
  );
};

export default App;
