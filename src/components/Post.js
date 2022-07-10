import { Avatar, Box, Paper, Typography } from "@mui/material";
import { UserPageHeader } from "./UserPageHeader";

export const Post = ({ post }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        width: "75vw",
        maxWidth: "400px",
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid",
          borderColor: "primary.main",
          p: 2,
        }}
      >
        <Avatar sx={{ bgcolor: "primary.main", height: 40, width: 40 }} />
        <Typography variant="body1" ml={2}>
          {post.author.slice(0, 5)}...{post.author.slice(-5)}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "75vw",
          maxHeight: "400px",
          backgroundImage: `url(https://ipfs.infura.io/ipfs/${post.image_cid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography variant="body2">{post.caption}</Typography>
      </Box>
    </Paper>
  );
};
