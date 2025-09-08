import { z } from 'zod';
import { JobOrderByWithRelationInputObjectSchema } from './objects/JobOrderByWithRelationInput.schema';
import { JobWhereInputObjectSchema } from './objects/JobWhereInput.schema';
import { JobWhereUniqueInputObjectSchema } from './objects/JobWhereUniqueInput.schema';
import { JobCountAggregateInputObjectSchema } from './objects/JobCountAggregateInput.schema';
import { JobMinAggregateInputObjectSchema } from './objects/JobMinAggregateInput.schema';
import { JobMaxAggregateInputObjectSchema } from './objects/JobMaxAggregateInput.schema';
import { JobAvgAggregateInputObjectSchema } from './objects/JobAvgAggregateInput.schema';
import { JobSumAggregateInputObjectSchema } from './objects/JobSumAggregateInput.schema';

export const JobAggregateSchema = z.object({ orderBy: z.union([JobOrderByWithRelationInputObjectSchema, JobOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobWhereInputObjectSchema.optional(), cursor: JobWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), JobCountAggregateInputObjectSchema ]).optional(), _min: JobMinAggregateInputObjectSchema.optional(), _max: JobMaxAggregateInputObjectSchema.optional(), _avg: JobAvgAggregateInputObjectSchema.optional(), _sum: JobSumAggregateInputObjectSchema.optional() })