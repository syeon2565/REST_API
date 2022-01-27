import express from "express";

import auth from "./api/auth";
import post from "./api/post";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/posts", post);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
