import { z } from 'zod';
import { QuestionsOnJobsOrderByWithRelationInputObjectSchema } from './objects/QuestionsOnJobsOrderByWithRelationInput.schema';
import { QuestionsOnJobsWhereInputObjectSchema } from './objects/QuestionsOnJobsWhereInput.schema';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './objects/QuestionsOnJobsWhereUniqueInput.schema';
import { QuestionsOnJobsCountAggregateInputObjectSchema } from './objects/QuestionsOnJobsCountAggregateInput.schema';
import { QuestionsOnJobsMinAggregateInputObjectSchema } from './objects/QuestionsOnJobsMinAggregateInput.schema';
import { QuestionsOnJobsMaxAggregateInputObjectSchema } from './objects/QuestionsOnJobsMaxAggregateInput.schema';
import { QuestionsOnJobsAvgAggregateInputObjectSchema } from './objects/QuestionsOnJobsAvgAggregateInput.schema';
import { QuestionsOnJobsSumAggregateInputObjectSchema } from './objects/QuestionsOnJobsSumAggregateInput.schema';

export const QuestionsOnJobsAggregateSchema = z.object({ orderBy: z.union([QuestionsOnJobsOrderByWithRelationInputObjectSchema, QuestionsOnJobsOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuestionsOnJobsWhereInputObjectSchema.optional(), cursor: QuestionsOnJobsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), QuestionsOnJobsCountAggregateInputObjectSchema ]).optional(), _min: QuestionsOnJobsMinAggregateInputObjectSchema.optional(), _max: QuestionsOnJobsMaxAggregateInputObjectSchema.optional(), _avg: QuestionsOnJobsAvgAggregateInputObjectSchema.optional(), _sum: QuestionsOnJobsSumAggregateInputObjectSchema.optional() })