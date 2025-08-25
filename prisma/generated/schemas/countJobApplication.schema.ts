import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JobApplicationOrderByWithRelationInputObjectSchema } from './objects/JobApplicationOrderByWithRelationInput.schema';
import { JobApplicationWhereInputObjectSchema } from './objects/JobApplicationWhereInput.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './objects/JobApplicationWhereUniqueInput.schema';
import { JobApplicationCountAggregateInputObjectSchema } from './objects/JobApplicationCountAggregateInput.schema';

export const JobApplicationCountSchema: z.ZodType<Prisma.JobApplicationCountArgs> = z.object({ orderBy: z.union([JobApplicationOrderByWithRelationInputObjectSchema, JobApplicationOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobApplicationWhereInputObjectSchema.optional(), cursor: JobApplicationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), JobApplicationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.JobApplicationCountArgs>;

export const JobApplicationCountZodSchema = z.object({ orderBy: z.union([JobApplicationOrderByWithRelationInputObjectSchema, JobApplicationOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobApplicationWhereInputObjectSchema.optional(), cursor: JobApplicationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), JobApplicationCountAggregateInputObjectSchema ]).optional() }).strict();