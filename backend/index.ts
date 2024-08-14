import express from "express";
import cors from "cors"
import fileDb from "./fileDb";
import postRouter from "./routers/postRouter";

const app = express();
const port = 8000;


app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use("/posts", postRouter);


const run = async () => {
    await fileDb.init();

     app.listen(port, () => {
       console.log(`Server started on ${port} port!`);
     });
};

void run();