import { PrismaClient, User } from "@prisma/client";
import { injected } from "brandi";
import { TOKENS } from "../core/tokens";
import { Repository } from "./repository";

export class UserRepository implements Repository<User> {
    private db: PrismaClient;

    constructor(db: PrismaClient) {
        this.db = db;
    }

    async get() {
        return await this.db.user.findMany();
    }

    async create(args: any) {
        const { email, name } = args;
        return await this.db.user.create({ data: { email, name }});
    }
}

injected(UserRepository, TOKENS.prismaClient);