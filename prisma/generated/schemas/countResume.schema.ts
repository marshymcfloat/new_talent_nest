import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ResumeOrderByWithRelationInputObjectSchema } from './objects/ResumeOrderByWithRelationInput.schema';
import { ResumeWhereInputObjectSchema } from './objects/ResumeWhereInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './objects/ResumeWhereUniqueInput.schema';
import { ResumeCountAggregateInputObjectSchema } from './objects/ResumeCountAggregateInput.schema';

export const ResumeCountSchema: z.ZodType<Prisma.ResumeCountArgs> = z.object({ orderBy: z.union([ResumeOrderByWithRelationInputObjectSchema, ResumeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResumeWhereInputObjectSchema.optional(), cursor: ResumeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ResumeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ResumeCountArgs>;

export const ResumeCountZodSchema = z.object({ orderBy: z.union([ResumeOrderByWithRelationInputObjectSchema, ResumeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResumeWhereInputObjectSchema.optional(), cursor: ResumeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ResumeCountAggregateInputObjectSchema ]).optional() }).strict();