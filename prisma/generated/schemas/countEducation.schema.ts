import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EducationOrderByWithRelationInputObjectSchema } from './objects/EducationOrderByWithRelationInput.schema';
import { EducationWhereInputObjectSchema } from './objects/EducationWhereInput.schema';
import { EducationWhereUniqueInputObjectSchema } from './objects/EducationWhereUniqueInput.schema';
import { EducationCountAggregateInputObjectSchema } from './objects/EducationCountAggregateInput.schema';

export const EducationCountSchema: z.ZodType<Prisma.EducationCountArgs> = z.object({ orderBy: z.union([EducationOrderByWithRelationInputObjectSchema, EducationOrderByWithRelationInputObjectSchema.array()]).optional(), where: EducationWhereInputObjectSchema.optional(), cursor: EducationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EducationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.EducationCountArgs>;

export const EducationCountZodSchema = z.object({ orderBy: z.union([EducationOrderByWithRelationInputObjectSchema, EducationOrderByWithRelationInputObjectSchema.array()]).optional(), where: EducationWhereInputObjectSchema.optional(), cursor: EducationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EducationCountAggregateInputObjectSchema ]).optional() }).strict();