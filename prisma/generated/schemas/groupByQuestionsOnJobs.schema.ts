import { z } from 'zod';
import { QuestionsOnJobsWhereInputObjectSchema } from './objects/QuestionsOnJobsWhereInput.schema';
import { QuestionsOnJobsOrderByWithAggregationInputObjectSchema } from './objects/QuestionsOnJobsOrderByWithAggregationInput.schema';
import { QuestionsOnJobsScalarWhereWithAggregatesInputObjectSchema } from './objects/QuestionsOnJobsScalarWhereWithAggregatesInput.schema';
import { QuestionsOnJobsScalarFieldEnumSchema } from './enums/QuestionsOnJobsScalarFieldEnum.schema';
import { QuestionsOnJobsCountAggregateInputObjectSchema } from './objects/QuestionsOnJobsCountAggregateInput.schema';
import { QuestionsOnJobsMinAggregateInputObjectSchema } from './objects/QuestionsOnJobsMinAggregateInput.schema';
import { QuestionsOnJobsMaxAggregateInputObjectSchema } from './objects/QuestionsOnJobsMaxAggregateInput.schema';

export const QuestionsOnJobsGroupBySchema = z.object({ where: QuestionsOnJobsWhereInputObjectSchema.optional(), orderBy: z.union([QuestionsOnJobsOrderByWithAggregationInputObjectSchema, QuestionsOnJobsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: QuestionsOnJobsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(QuestionsOnJobsScalarFieldEnumSchema), _count: z.union([ z.literal(true), QuestionsOnJobsCountAggregateInputObjectSchema ]).optional(), _min: QuestionsOnJobsMinAggregateInputObjectSchema.optional(), _max: QuestionsOnJobsMaxAggregateInputObjectSchema.optional() })