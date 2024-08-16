import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post, PostMutation } from "../types";
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


export const createPost = createAsyncThunk(
  "posts/create",
  async (postData: PostMutation) => {
    const formData = new FormData();
    formData.append("message", postData.message);
    if (postData.author) {
      formData.append("author", postData.author);
    }
    if (postData.image) {
      formData.append("image", postData.image);
    }

    const response = await axiosApi.post("/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  }
);

