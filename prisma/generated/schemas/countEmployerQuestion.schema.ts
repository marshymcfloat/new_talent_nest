import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EmployerQuestionOrderByWithRelationInputObjectSchema } from './objects/EmployerQuestionOrderByWithRelationInput.schema';
import { EmployerQuestionWhereInputObjectSchema } from './objects/EmployerQuestionWhereInput.schema';
import { EmployerQuestionWhereUniqueInputObjectSchema } from './objects/EmployerQuestionWhereUniqueInput.schema';
import { EmployerQuestionCountAggregateInputObjectSchema } from './objects/EmployerQuestionCountAggregateInput.schema';

export const EmployerQuestionCountSchema: z.ZodType<Prisma.EmployerQuestionCountArgs> = z.object({ orderBy: z.union([EmployerQuestionOrderByWithRelationInputObjectSchema, EmployerQuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmployerQuestionWhereInputObjectSchema.optional(), cursor: EmployerQuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EmployerQuestionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.EmployerQuestionCountArgs>;

export const EmployerQuestionCountZodSchema = z.object({ orderBy: z.union([EmployerQuestionOrderByWithRelationInputObjectSchema, EmployerQuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmployerQuestionWhereInputObjectSchema.optional(), cursor: EmployerQuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EmployerQuestionCountAggregateInputObjectSchema ]).optional() }).strict();