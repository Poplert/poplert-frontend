import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import MetaMaskOnboarding from "@metamask/onboarding";

export const MetaMaskContext = createContext({
  accounts: [],
  handleConnectWallet: () => {},
});

export const useMetaMaskContext = () => useContext(MetaMaskContext);

export const MetaMaskContextProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const onboarding = useRef();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        onboarding.current.stopOnboarding();
      }
    }
  }, [accounts]);

  useEffect(() => {
    function handleNewAccounts(newAccounts) {
      setAccounts(newAccounts);
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(handleNewAccounts);
      window.ethereum.on("accountsChanged", handleNewAccounts);
      return () => {
        window.ethereum.off("accountsChanged", handleNewAccounts);
      };
    }
  }, []);

  const handleConnectWallet = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((newAccounts) => setAccounts(newAccounts));
    } else {
      onboarding.current.startOnboarding();
    }
  };

  return (
    <MetaMaskContext.Provider
      value={{
        accounts,
        handleConnectWallet,
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};
