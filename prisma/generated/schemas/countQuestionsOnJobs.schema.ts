import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { QuestionsOnJobsOrderByWithRelationInputObjectSchema } from './objects/QuestionsOnJobsOrderByWithRelationInput.schema';
import { QuestionsOnJobsWhereInputObjectSchema } from './objects/QuestionsOnJobsWhereInput.schema';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './objects/QuestionsOnJobsWhereUniqueInput.schema';
import { QuestionsOnJobsCountAggregateInputObjectSchema } from './objects/QuestionsOnJobsCountAggregateInput.schema';

export const QuestionsOnJobsCountSchema: z.ZodType<Prisma.QuestionsOnJobsCountArgs> = z.object({ orderBy: z.union([QuestionsOnJobsOrderByWithRelationInputObjectSchema, QuestionsOnJobsOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuestionsOnJobsWhereInputObjectSchema.optional(), cursor: QuestionsOnJobsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), QuestionsOnJobsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.QuestionsOnJobsCountArgs>;

export const QuestionsOnJobsCountZodSchema = z.object({ orderBy: z.union([QuestionsOnJobsOrderByWithRelationInputObjectSchema, QuestionsOnJobsOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuestionsOnJobsWhereInputObjectSchema.optional(), cursor: QuestionsOnJobsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), QuestionsOnJobsCountAggregateInputObjectSchema ]).optional() }).strict();