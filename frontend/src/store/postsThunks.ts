import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../types";
import axiosApi from "../axiosApi";
import { AppDispatch } from "../app/store";

export const fetchPosts = createAsyncThunk<
  Post[],
  undefined,
  { dispatch: AppDispatch }
>("posts/fetchAll", async () => {
  const postsRespone = await axiosApi.get<Post[]>("/posts");
  const posts = postsRespone.data;
  return posts;
});

