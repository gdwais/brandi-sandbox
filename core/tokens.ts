/** tokens.ts */

import { token } from 'brandi';
import type { PrismaClient } from '@prisma/client';
import type { PostRepository } from '../services/post.repository'
import { UserRepository } from '../services/user.repository';

export const TOKENS = {
  prismaClient: token<PrismaClient>('PrismaClient'),
  postRepository: token<PostRepository>('PostRepository'),
  userRepository: token<UserRepository>('UserRepository')
};