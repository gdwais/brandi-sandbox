import { PrismaClient } from "@prisma/client";
import express from "express";
import { send } from "process";
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

const PORT = 3000;

const db = new PrismaClient();

app.get("/users", async (req, res) => {
  const users = db.user.findMany();
  res.send(users);
});

app.post("/user", async (req, res) => {
  const { email, name } = req.body;
  const user = await db.user.create({ data: { email, name } });
  res.send(user);
});

app.get("/posts", async (req, res) => {
  const posts = await db.post.findMany();
  res.send(posts);
});

app.post("/post", async (req, res) => { 
  const { title, content, authorId } = req.body;
  const post = await db.post.create({
    data: {
      title,
      content,
      authorId,
      published: false,
    },
  });

  res.send(post);
});

app.listen(PORT, () => {
  console.log(`Running brandi-sandbox! http://localhost:${PORT}`);
});
