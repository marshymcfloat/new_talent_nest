import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AnswerOrderByWithRelationInputObjectSchema } from './objects/AnswerOrderByWithRelationInput.schema';
import { AnswerWhereInputObjectSchema } from './objects/AnswerWhereInput.schema';
import { AnswerWhereUniqueInputObjectSchema } from './objects/AnswerWhereUniqueInput.schema';
import { AnswerCountAggregateInputObjectSchema } from './objects/AnswerCountAggregateInput.schema';

export const AnswerCountSchema: z.ZodType<Prisma.AnswerCountArgs> = z.object({ orderBy: z.union([AnswerOrderByWithRelationInputObjectSchema, AnswerOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnswerWhereInputObjectSchema.optional(), cursor: AnswerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AnswerCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AnswerCountArgs>;

export const AnswerCountZodSchema = z.object({ orderBy: z.union([AnswerOrderByWithRelationInputObjectSchema, AnswerOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnswerWhereInputObjectSchema.optional(), cursor: AnswerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AnswerCountAggregateInputObjectSchema ]).optional() }).strict();