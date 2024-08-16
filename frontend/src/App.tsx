import { useAppDispatch, useAppSelector } from "./app/Hooks";
import { useEffect } from "react";
import { selectPosts } from "./store/postsSlice";
import { CircularProgress, Grid } from "@mui/material";
import PostItem from "./app/components/Posts/PostItem";
import { fetchPosts } from "./store/postsThunks";
import PostForm from "./app/components/PostForm/PostForm";

const App = () => {
  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  let postArea: React.ReactNode = <CircularProgress />;

  useEffect(() => {
    void dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Grid
      container
      direction="column"
      spacing={1}
      sx={{ width: "70%", marginX: "auto" }}
    >
      <Grid item xs={4}>
        <PostForm />
      </Grid>
      <Grid item xs container direction="column">
        {
          (postArea = posts.map((post) => (
            <PostItem
              id={post.id}
              key={post.id}
              author={post.author}
              message={post.message}
              image={post.image}
            />
          )))
        }
      </Grid>
    </Grid>
  );
};

export default App;
