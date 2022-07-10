import { Box, Modal, Paper, Typography } from "@mui/material";
import { PostButton } from "../components/PostButton";
export const MakePost = ({ open, setOpen }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "75%",
    maxWidth: "600px",
    transform: "translate(-50%, -50%)",
    p: 4,
  };
  return (
    <Modal open={open} onClose={() => setOpen(false)} keepMounted>
      <Paper sx={style}>
        <Box>
          <Typography variant="body2" textAlign={"center"}>
            Make a Post
          </Typography>
        </Box>
        <Box
          sx={{
            minHeight: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" textAlign={"center"}>
            Click this button to select the image
          </Typography>
          <PostButton />
        </Box>
      </Paper>
    </Modal>
  );
};
