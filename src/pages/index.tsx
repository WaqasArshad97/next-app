import { Inter } from "next/font/google";
import {
  Box,
  Alert,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useAppContext } from "@/context/AppContext";
import PostCard from "@/components/PostCard/PostCard";
import { Post } from "@/types/types";
import { Key } from "react";
import { Masonry } from "@mui/lab";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { posts, loading, error } = useAppContext();

  if (loading) {
    return (
      <Box 
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      >
        <CircularProgress sx={{color:"#3AAFA9"}}/>;
      </Box>
    )
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <>
      <Typography
        component={"h2"}
        variant="h4"
        sx={{
          mb: 1,
        }}
      >
        Posts
      </Typography>
      <Box
        sx={{
          width: "100%",
          minHeight: 829,
        }}
      >
        <Masonry
          columns={{
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
          }}
          spacing={2}
        >
          {posts?.posts.map((post: Post, index: Key | null | undefined) => (
            <PostCard key={index} post={post} />
          ))}
        </Masonry>
      </Box>
    </>
  );
}
