import express from "express";
import fileDb from "../fileDb";

const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
  const posts = await fileDb.getItems();
  return res.send(posts);
});

postRouter.post("/", async (req, res) => {
     if (!req.body.message || req.body.message.trim()  === "" ) {
    return res.status(400).send({error: 'Сообщение не может быть пустым!'});
  }

  const post = {
    message: req.body.message,
    author: req.body.author,
    image: req.file ? req.file.filename : null,
  };

  const savedPost= await fileDb.addItem(post);
  return res.send(savedPost);

})

export default postRouter;