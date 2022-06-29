/** container.ts */

import { Container } from 'brandi';
import { PrismaClient } from '@prisma/client'

import { TOKENS } from './tokens';

import { UserRepository } from '../services/user.repository';
import { PostRepository } from '../services/post.repository';
import { UserService } from '../services/user.service';

export const container = new Container();

container.bind(TOKENS.prismaClient).toConstant(new PrismaClient());
container.bind(TOKENS.userRepository).toInstance(UserRepository).inContainerScope();
container.bind(TOKENS.postRepository).toInstance(PostRepository).inContainerScope();
container.bind(TOKENS.userService).toInstance(UserService).inContainerScope();
