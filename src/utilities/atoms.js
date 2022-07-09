import { atom } from "recoil";

export const statusAtom = atom({
  key: "mystatus",
  default: {
    currentStatus: "Loading",
    message: "",
  },
});
