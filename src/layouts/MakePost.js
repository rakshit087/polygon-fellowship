import { useState } from "react";
import {
  Box,
  Button,
  LinearProgress,
  IconButton,
  Modal,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import { PostButton } from "../components/PostButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IPFSService } from "../services/IPFSService";
import { useSnackbar } from "notistack";

export const MakePost = ({ open, setOpen }) => {
  const [image, setImage] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Modal open={open} onClose={() => setOpen(false)} keepMounted>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "75vw",
          maxWidth: "400px",
          transform: "translate(-50%, -50%)",
          borderRadius: "0px",
        }}
      >
        <LinearProgress
          value={"100%"}
          variant={loading ? "indeterminate" : "determinate"}
        />
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {thumbnail && (
            <IconButton
              onClick={() => {
                setThumbnail(null);
                setLoading(false);
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          )}
          <Typography variant="body2" textAlign={"center"} mx={3} flexGrow="1">
            Make a Post
          </Typography>
          {thumbnail && (
            <Button
              size="small"
              variant="contained"
              disabled={loading}
              onClick={async () => {
                enqueueSnackbar("Posting...");
                setLoading(true);
                const url = await IPFSService.addFile(image);
                setLoading(false);
                setThumbnail(null);
                setImage(null);
              }}
            >
              {loading ? "Posting..." : "Post"}
            </Button>
          )}
        </Box>
        <PostButton
          setImage={setImage}
          setThumbnail={setThumbnail}
          thumbnail={thumbnail}
        />
        {thumbnail && (
          <TextField
            multiline
            fullWidth
            rows={3}
            variant="standard"
            placeholder="What's on your mind?"
            sx={{
              px: 2,
              pt: 1,
            }}
            InputProps={{
              disableUnderline: true,
            }}
            onChange={(e) => setCaption(e.target.value)}
            disabled={loading}
          />
        )}
      </Paper>
    </Modal>
  );
};
