import { z } from 'zod';
import { CareerHistoryOrderByWithRelationInputObjectSchema } from './objects/CareerHistoryOrderByWithRelationInput.schema';
import { CareerHistoryWhereInputObjectSchema } from './objects/CareerHistoryWhereInput.schema';
import { CareerHistoryWhereUniqueInputObjectSchema } from './objects/CareerHistoryWhereUniqueInput.schema';
import { CareerHistoryCountAggregateInputObjectSchema } from './objects/CareerHistoryCountAggregateInput.schema';
import { CareerHistoryMinAggregateInputObjectSchema } from './objects/CareerHistoryMinAggregateInput.schema';
import { CareerHistoryMaxAggregateInputObjectSchema } from './objects/CareerHistoryMaxAggregateInput.schema';

export const CareerHistoryAggregateSchema = z.object({ orderBy: z.union([CareerHistoryOrderByWithRelationInputObjectSchema, CareerHistoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CareerHistoryWhereInputObjectSchema.optional(), cursor: CareerHistoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CareerHistoryCountAggregateInputObjectSchema ]).optional(), _min: CareerHistoryMinAggregateInputObjectSchema.optional(), _max: CareerHistoryMaxAggregateInputObjectSchema.optional() })