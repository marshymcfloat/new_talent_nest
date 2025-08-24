import { z } from 'zod';
import { JobApplicationOrderByWithRelationInputObjectSchema } from './objects/JobApplicationOrderByWithRelationInput.schema';
import { JobApplicationWhereInputObjectSchema } from './objects/JobApplicationWhereInput.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './objects/JobApplicationWhereUniqueInput.schema';
import { JobApplicationCountAggregateInputObjectSchema } from './objects/JobApplicationCountAggregateInput.schema';
import { JobApplicationMinAggregateInputObjectSchema } from './objects/JobApplicationMinAggregateInput.schema';
import { JobApplicationMaxAggregateInputObjectSchema } from './objects/JobApplicationMaxAggregateInput.schema';

export const JobApplicationAggregateSchema = z.object({ orderBy: z.union([JobApplicationOrderByWithRelationInputObjectSchema, JobApplicationOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobApplicationWhereInputObjectSchema.optional(), cursor: JobApplicationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), JobApplicationCountAggregateInputObjectSchema ]).optional(), _min: JobApplicationMinAggregateInputObjectSchema.optional(), _max: JobApplicationMaxAggregateInputObjectSchema.optional() })