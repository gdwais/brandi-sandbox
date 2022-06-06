import { Post, PrismaClient } from "@prisma/client";
import { Repository } from "./repository";
import { TOKENS } from "../core/tokens";
import { injected } from "brandi";

export class PostRepository implements Repository<Post> {
  private db: PrismaClient;

  constructor(db: PrismaClient) {
    this.db = db;
  }

  async get() {
    return await this.db.post.findMany();
  }

  async create(args: any) {
    const { title, content, authorId } = args;
    return await this.db.post.create({
      data: {
        title,
        content,
        authorId,
        published: false,
      },
    });
  }
}

injected(PostRepository, TOKENS.prismaClient);
