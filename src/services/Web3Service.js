import { ethers } from "ethers";

export const Web3Service = {
  //Add event listeners
  enableListeners: async () => {
    window.ethereum.on("accountsChanged", () => {
      window.location.reload();
    });
    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });
  },

  //Connect to metamask
  connect: async () => {
    const eth = await window.ethereum;
    await eth.request({ method: "eth_requestAccounts" });
  },

  //Check if user is connected to metamask or not
  isConnected: async () => {
    if (window.ethereum) {
      const eth = await window.ethereum;
      const provider = new ethers.providers.Web3Provider(eth);
      const signer = await provider.getSigner();
      try {
        await signer.getAddress();
        return true;
      } catch {
        return false;
      }
    }
  },

  //Check if user is on Polygon Testnet
  isPolygon: async () => {
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    return chainId == 80001;
  },
  //Get Current Wallet Address
  getWallet: async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const wallet = await signer.getAddress();
    return wallet;
  },
};
