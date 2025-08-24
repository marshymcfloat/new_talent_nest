import { z } from 'zod';
import { JobApplicationWhereInputObjectSchema } from './objects/JobApplicationWhereInput.schema';
import { JobApplicationOrderByWithAggregationInputObjectSchema } from './objects/JobApplicationOrderByWithAggregationInput.schema';
import { JobApplicationScalarWhereWithAggregatesInputObjectSchema } from './objects/JobApplicationScalarWhereWithAggregatesInput.schema';
import { JobApplicationScalarFieldEnumSchema } from './enums/JobApplicationScalarFieldEnum.schema';
import { JobApplicationCountAggregateInputObjectSchema } from './objects/JobApplicationCountAggregateInput.schema';
import { JobApplicationMinAggregateInputObjectSchema } from './objects/JobApplicationMinAggregateInput.schema';
import { JobApplicationMaxAggregateInputObjectSchema } from './objects/JobApplicationMaxAggregateInput.schema';

export const JobApplicationGroupBySchema = z.object({ where: JobApplicationWhereInputObjectSchema.optional(), orderBy: z.union([JobApplicationOrderByWithAggregationInputObjectSchema, JobApplicationOrderByWithAggregationInputObjectSchema.array()]).optional(), having: JobApplicationScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(JobApplicationScalarFieldEnumSchema), _count: z.union([ z.literal(true), JobApplicationCountAggregateInputObjectSchema ]).optional(), _min: JobApplicationMinAggregateInputObjectSchema.optional(), _max: JobApplicationMaxAggregateInputObjectSchema.optional() })