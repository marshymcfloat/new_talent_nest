import { z } from 'zod';
import { AnswerWhereInputObjectSchema } from './objects/AnswerWhereInput.schema';
import { AnswerOrderByWithAggregationInputObjectSchema } from './objects/AnswerOrderByWithAggregationInput.schema';
import { AnswerScalarWhereWithAggregatesInputObjectSchema } from './objects/AnswerScalarWhereWithAggregatesInput.schema';
import { AnswerScalarFieldEnumSchema } from './enums/AnswerScalarFieldEnum.schema';
import { AnswerCountAggregateInputObjectSchema } from './objects/AnswerCountAggregateInput.schema';
import { AnswerMinAggregateInputObjectSchema } from './objects/AnswerMinAggregateInput.schema';
import { AnswerMaxAggregateInputObjectSchema } from './objects/AnswerMaxAggregateInput.schema';

export const AnswerGroupBySchema = z.object({ where: AnswerWhereInputObjectSchema.optional(), orderBy: z.union([AnswerOrderByWithAggregationInputObjectSchema, AnswerOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AnswerScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AnswerScalarFieldEnumSchema), _count: z.union([ z.literal(true), AnswerCountAggregateInputObjectSchema ]).optional(), _min: AnswerMinAggregateInputObjectSchema.optional(), _max: AnswerMaxAggregateInputObjectSchema.optional() })