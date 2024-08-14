import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsThunks";
import { Post } from "../types";
import { RootState } from "../app/store";

interface PostsState {
  posts: Post[];
  fetchLoading: boolean;
}

const initialState: PostsState = {
  posts: [],
  fetchLoading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload: items }) => {
      state.fetchLoading = false;
      state.posts = items;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.fetchLoading = false;
    });
  },
});

export const postsReducer = postsSlice.reducer;

export const selectPosts = (state: RootState) => state.posts.posts;
export const postLoading = (state: RootState) => state.posts.fetchLoading;
