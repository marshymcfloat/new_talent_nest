import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LanguageOrderByWithRelationInputObjectSchema } from './objects/LanguageOrderByWithRelationInput.schema';
import { LanguageWhereInputObjectSchema } from './objects/LanguageWhereInput.schema';
import { LanguageWhereUniqueInputObjectSchema } from './objects/LanguageWhereUniqueInput.schema';
import { LanguageCountAggregateInputObjectSchema } from './objects/LanguageCountAggregateInput.schema';

export const LanguageCountSchema: z.ZodType<Prisma.LanguageCountArgs> = z.object({ orderBy: z.union([LanguageOrderByWithRelationInputObjectSchema, LanguageOrderByWithRelationInputObjectSchema.array()]).optional(), where: LanguageWhereInputObjectSchema.optional(), cursor: LanguageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LanguageCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.LanguageCountArgs>;

export const LanguageCountZodSchema = z.object({ orderBy: z.union([LanguageOrderByWithRelationInputObjectSchema, LanguageOrderByWithRelationInputObjectSchema.array()]).optional(), where: LanguageWhereInputObjectSchema.optional(), cursor: LanguageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LanguageCountAggregateInputObjectSchema ]).optional() }).strict();