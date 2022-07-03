import { ethers } from "ethers";

export const Web3Service = {
  connect: async () => {
    const eth = await window.ethereum;
    await eth.request({ method: "eth_requestAccounts" });
  },
  //Check if user is connected to metamask or not
  isConnected: async () => {
    const eth = await window.ethereum;
    const provider = new ethers.providers.Web3Provider(eth);
    const signer = provider.getSigner();
    try {
      await signer.getAddress();
      return true;
    } catch {
      return false;
    }
  },
  //Get Current Wallet Address
  getWallet: async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const wallet = await signer.getAddress();
    return wallet;
  },
};
