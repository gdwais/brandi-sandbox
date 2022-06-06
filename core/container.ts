/** container.ts */

import { Container } from 'brandi';
import { PrismaClient } from '@prisma/client'

import { TOKENS } from './tokens';

import { UserRepository } from '../services/user.repository';
import { PostRepository } from '../services/post.repository';

export const container = new Container();

container.bind(TOKENS.prismaClient).toConstant(new PrismaClient());
container.bind(TOKENS.userRepository).toInstance(UserRepository).inContainerScope();
container.bind(TOKENS.postRepository).toInstance(PostRepository).inContainerScope();

