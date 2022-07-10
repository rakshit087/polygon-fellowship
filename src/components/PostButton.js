import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export const PostButton = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: "cover",
        width: "100%",
        height: "75vw",
        maxHeight: "500px",
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
            disabled={loading}
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
                reader.readAsDataURL(file);
                reader.onload = () => {
                  setThumbnail(reader.result);
                };
              }}
            />
          </Button>
        </>
      )}
    </Box>
  );
};
