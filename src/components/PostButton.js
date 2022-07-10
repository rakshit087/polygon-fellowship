import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export const PostButton = ({ thumbnail, setThumbnail, setImage }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "75vw",
        maxHeight: "400px",
      }}
    >
      {!thumbnail && (
        <>
          <Typography variant="h6" textAlign={"center"}>
            Click this button to select the image
          </Typography>
          <Button
            variant="contained"
            component="label"
            color="primary"
            sx={{ mt: 3 }}
            disabled={thumbnail}
          >
            Select an Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={async (e) => {
                setLoading(true);
                const file = e.target.files[0];
                const reader = new FileReader();
                const dataUrl = await new Promise((resolve, reject) => {
                  reader.onload = () => resolve(reader.result);
                  reader.onerror = (err) => reject(err);
                  reader.readAsDataURL(file);
                });
                const arrayBuffer = await new Promise((resolve, reject) => {
                  reader.onload = () => resolve(reader.result);
                  reader.onerror = (err) => reject(err);
                  reader.readAsArrayBuffer(file);
                });
                setThumbnail(dataUrl);
                setImage(arrayBuffer);
              }}
            />
          </Button>
        </>
      )}
    </Box>
  );
};
