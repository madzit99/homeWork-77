import { promises as fs } from "fs";
import crypto from 'crypto';
import { Post, PostWithoutId } from "./types";

const fileName = "./db.json";
let data: Post[] = [];

const fileDb = {
  async init() {
    try {
      const fileContents = await fs.readFile(fileName);
      data = JSON.parse(fileContents.toString());
    } catch (err) {
      data = [];
    }
  },
  async getItems() {
    return data;
  },
  async addItem(item: PostWithoutId) {
    const id = crypto.randomUUID();
    const post = {id, ...item};
    data.push(post);
    await this.save();

    return post;
  },
  async save() {
    return fs.writeFile(fileName, JSON.stringify(data));
  },
};

export default fileDb;
