import { PrismaClient } from "@prisma/client";
import express from "express";
import { send } from "process";
import { PostRepository } from "./services/post.repository";
import { UserRepository } from "./services/user.repository";
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

const PORT = 3000;

import { container } from "./core/container";
import { TOKENS } from "./core/tokens";

const userRepository = container.get(TOKENS.userRepository);
const postRepository = container.get(TOKENS.postRepository);
const userService = container.get(TOKENS.userService);

// this works just fine but it doesn't scale well 
// const db = new PrismaClient();

// const userRepository = new UserRepository(db);
// const postRepository = new PostRepository(db);

app.get("/users", async (req, res) => {
  const users = await userService.getSomeData();
  res.send(users);
});

app.post("/user", async (req, res) => {
  const { email, name } = req.body;
  const user = await userRepository.create({ email, name });
  res.send(user);
});

app.get("/posts", async (req, res) => {
  const posts = await postRepository.get();
  res.send(posts);
});

app.post("/post", async (req, res) => {
  const { title, content, authorId } = req.body;
  const post = await postRepository.create({ title, content, authorId });
  res.send(post);
});

app.listen(PORT, () => {
  console.log(`Running brandi-sandbox! http://localhost:${PORT}`);
});
