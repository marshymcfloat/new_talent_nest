import { z } from 'zod';
import { JobWhereInputObjectSchema } from './objects/JobWhereInput.schema';
import { JobOrderByWithAggregationInputObjectSchema } from './objects/JobOrderByWithAggregationInput.schema';
import { JobScalarWhereWithAggregatesInputObjectSchema } from './objects/JobScalarWhereWithAggregatesInput.schema';
import { JobScalarFieldEnumSchema } from './enums/JobScalarFieldEnum.schema';
import { JobCountAggregateInputObjectSchema } from './objects/JobCountAggregateInput.schema';
import { JobMinAggregateInputObjectSchema } from './objects/JobMinAggregateInput.schema';
import { JobMaxAggregateInputObjectSchema } from './objects/JobMaxAggregateInput.schema';

export const JobGroupBySchema = z.object({ where: JobWhereInputObjectSchema.optional(), orderBy: z.union([JobOrderByWithAggregationInputObjectSchema, JobOrderByWithAggregationInputObjectSchema.array()]).optional(), having: JobScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(JobScalarFieldEnumSchema), _count: z.union([ z.literal(true), JobCountAggregateInputObjectSchema ]).optional(), _min: JobMinAggregateInputObjectSchema.optional(), _max: JobMaxAggregateInputObjectSchema.optional() })