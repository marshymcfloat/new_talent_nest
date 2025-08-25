import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JobOrderByWithRelationInputObjectSchema } from './objects/JobOrderByWithRelationInput.schema';
import { JobWhereInputObjectSchema } from './objects/JobWhereInput.schema';
import { JobWhereUniqueInputObjectSchema } from './objects/JobWhereUniqueInput.schema';
import { JobCountAggregateInputObjectSchema } from './objects/JobCountAggregateInput.schema';

export const JobCountSchema: z.ZodType<Prisma.JobCountArgs> = z.object({ orderBy: z.union([JobOrderByWithRelationInputObjectSchema, JobOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobWhereInputObjectSchema.optional(), cursor: JobWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), JobCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.JobCountArgs>;

export const JobCountZodSchema = z.object({ orderBy: z.union([JobOrderByWithRelationInputObjectSchema, JobOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobWhereInputObjectSchema.optional(), cursor: JobWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), JobCountAggregateInputObjectSchema ]).optional() }).strict();