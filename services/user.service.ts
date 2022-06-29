import { injected } from "brandi";
import { TOKENS } from "../core/tokens";
import { UserRepository } from "./user.repository";

export class UserService {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    async getSomeData() {
        return await this.repository.get();
    }
}

injected(UserService, TOKENS.userRepository);
