import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useRecoilState } from "recoil";
import { statusAtom } from "../utilities/atoms";
import { Web3Service } from "../services/Web3Service";

export const ConnectButton = () => {
  const [status, setStatus] = useRecoilState(statusAtom);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    //Checks if user was previously connected
    if (window.ethereum) {
      Web3Service.isConnected().then((connected) => {
        if (connected) {
          Web3Service.enableListeners();
          Web3Service.isPolygon().then((polygon) => {
            if (polygon) {
              setStatus({ currentStatus: "Connected", message: "" });
            } else {
              setStatus({
                currentStatus: "Not on Polygon",
                message:
                  "You are not connected to Polygon Testnet, please switch network to continue",
              });
              enqueueSnackbar("Not connected to Polygon Testnet");
            }
          });
        } else {
          setStatus({
            currentStatus: "Connect",
            message: "Not Connected to a Metamask",
          });
        }
      });
    } else {
      enqueueSnackbar("Metamask Not Installed");
      setStatus({
        currentStatus: "No Metamask",
        message: "Metamask Not Installed",
      });
    }
  }, []);

  return (
    <Button
      variant="contained"
      size="small"
      sx={{ ml: 2 }}
      onClick={() => {
        setStatus({ currentStatus: "Loading", message: "" });
        Web3Service.isPolygon().then((polygon) => {
          if (polygon) {
            Web3Service.connect()
              .then(() => {
                setStatus({ currentStatus: "Connected", message: "" });
                Web3Service.enableListeners();
              })
              .catch(() => {
                setStatus({
                  currentStatus: "Connect",
                  message: "Not Connected to a Metamask",
                });
              });
          } else {
            setStatus({
              currentStatus: "Connect",
              message: "Not Connected to a Metamask",
            });
            enqueueSnackbar("Not connected to Polygon Testnet");
          }
        });
      }}
      disabled={status.currentStatus !== "Connect"}
    >
      {status.currentStatus}
    </Button>
  );
};
