import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Box,
  Button,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { PostCardProps } from "@/types/types";
import useStyles from "@/styles/styles";

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          className={classes.primary_color}
        >
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {post.body}
        </Typography>
        <Box className={classes.tags_box}>
          {post.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              variant="outlined"
              className={classes.secondary_bgcolor}
            />
          ))}
        </Box>
      </CardContent>
      <CardActions className={classes.card_actions}>
        <Box>
          <Button
            className={classes.thumbUpButton}
            size="small"
            startIcon={<ThumbUpIcon />}
          >
            {post.reactions.likes}
          </Button>
          <Button
            className={classes.thumbDownButton}
            size="small"
            startIcon={<ThumbDownIcon />}
          >
            {post.reactions.dislikes}
          </Button>
        </Box>
        <Box className={classes.flex}>
          <VisibilityIcon className={classes.thumbDownButton} />
          <Typography
            className={classes.thumbDownButton}
            variant="body2"
            ml={0.5}
          >
            {post.views}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default PostCard;
