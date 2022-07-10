import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import { PostButton } from "../components/PostButton";

export const MakePost = ({ open, setOpen }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "75vw",
    maxWidth: "500px",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
  };
  return (
    <Modal open={open} onClose={() => setOpen(false)} keepMounted>
      <Paper sx={style}>
        <Box sx={{py:2, borderBottom:"solid 1px", borderColor:"seconary.main"}}>
          <Typography variant="body2" textAlign={"center"}>
            Make a Post
          </Typography>
        </Box>
        <PostButton />
      </Paper>
    </Modal>
  );
};
