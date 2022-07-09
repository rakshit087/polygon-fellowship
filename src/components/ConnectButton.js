import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Web3Service } from "../services/Web3Service";

export const ConnectButton = () => {
  const [status, setStatus] = useState("Loading");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (window.ethereum) {
      Web3Service.isConnected().then((connected) => {
        connected ? setStatus("Connected") : setStatus("Connect");
        Web3Service.enableListeners()
      });
    } else {
      enqueueSnackbar("Metamask Not Installed");
      setStatus("No Metamask");
    }
  });

  return (
    <Button
      variant="contained"
      size="small"
      sx={{ ml: 2 }}
      onClick={() => {
        setStatus("Loading");
        Web3Service.connect()
          .then(() => {
            setStatus("Connected");
            Web3Service.enableListeners();
          })
          .catch(() => {
            setStatus("Connect");
          });
      }}
      disabled={status !== "Connect"}
    >
      {status}
    </Button>
  );
};
