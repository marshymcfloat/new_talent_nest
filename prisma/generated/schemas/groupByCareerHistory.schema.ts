import { z } from 'zod';
import { CareerHistoryWhereInputObjectSchema } from './objects/CareerHistoryWhereInput.schema';
import { CareerHistoryOrderByWithAggregationInputObjectSchema } from './objects/CareerHistoryOrderByWithAggregationInput.schema';
import { CareerHistoryScalarWhereWithAggregatesInputObjectSchema } from './objects/CareerHistoryScalarWhereWithAggregatesInput.schema';
import { CareerHistoryScalarFieldEnumSchema } from './enums/CareerHistoryScalarFieldEnum.schema';
import { CareerHistoryCountAggregateInputObjectSchema } from './objects/CareerHistoryCountAggregateInput.schema';
import { CareerHistoryMinAggregateInputObjectSchema } from './objects/CareerHistoryMinAggregateInput.schema';
import { CareerHistoryMaxAggregateInputObjectSchema } from './objects/CareerHistoryMaxAggregateInput.schema';

export const CareerHistoryGroupBySchema = z.object({ where: CareerHistoryWhereInputObjectSchema.optional(), orderBy: z.union([CareerHistoryOrderByWithAggregationInputObjectSchema, CareerHistoryOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CareerHistoryScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CareerHistoryScalarFieldEnumSchema), _count: z.union([ z.literal(true), CareerHistoryCountAggregateInputObjectSchema ]).optional(), _min: CareerHistoryMinAggregateInputObjectSchema.optional(), _max: CareerHistoryMaxAggregateInputObjectSchema.optional() })