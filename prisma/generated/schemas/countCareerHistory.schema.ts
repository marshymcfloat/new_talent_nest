import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CareerHistoryOrderByWithRelationInputObjectSchema } from './objects/CareerHistoryOrderByWithRelationInput.schema';
import { CareerHistoryWhereInputObjectSchema } from './objects/CareerHistoryWhereInput.schema';
import { CareerHistoryWhereUniqueInputObjectSchema } from './objects/CareerHistoryWhereUniqueInput.schema';
import { CareerHistoryCountAggregateInputObjectSchema } from './objects/CareerHistoryCountAggregateInput.schema';

export const CareerHistoryCountSchema: z.ZodType<Prisma.CareerHistoryCountArgs> = z.object({ orderBy: z.union([CareerHistoryOrderByWithRelationInputObjectSchema, CareerHistoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CareerHistoryWhereInputObjectSchema.optional(), cursor: CareerHistoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CareerHistoryCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CareerHistoryCountArgs>;

export const CareerHistoryCountZodSchema = z.object({ orderBy: z.union([CareerHistoryOrderByWithRelationInputObjectSchema, CareerHistoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CareerHistoryWhereInputObjectSchema.optional(), cursor: CareerHistoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CareerHistoryCountAggregateInputObjectSchema ]).optional() }).strict();