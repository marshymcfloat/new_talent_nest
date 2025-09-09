import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CompanyQuestionOrderByWithRelationInputObjectSchema } from './objects/CompanyQuestionOrderByWithRelationInput.schema';
import { CompanyQuestionWhereInputObjectSchema } from './objects/CompanyQuestionWhereInput.schema';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './objects/CompanyQuestionWhereUniqueInput.schema';
import { CompanyQuestionCountAggregateInputObjectSchema } from './objects/CompanyQuestionCountAggregateInput.schema';

export const CompanyQuestionCountSchema: z.ZodType<Prisma.CompanyQuestionCountArgs> = z.object({ orderBy: z.union([CompanyQuestionOrderByWithRelationInputObjectSchema, CompanyQuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyQuestionWhereInputObjectSchema.optional(), cursor: CompanyQuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CompanyQuestionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CompanyQuestionCountArgs>;

export const CompanyQuestionCountZodSchema = z.object({ orderBy: z.union([CompanyQuestionOrderByWithRelationInputObjectSchema, CompanyQuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyQuestionWhereInputObjectSchema.optional(), cursor: CompanyQuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CompanyQuestionCountAggregateInputObjectSchema ]).optional() }).strict();