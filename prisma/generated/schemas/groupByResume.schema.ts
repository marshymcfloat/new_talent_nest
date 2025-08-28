import { z } from 'zod';
import { ResumeWhereInputObjectSchema } from './objects/ResumeWhereInput.schema';
import { ResumeOrderByWithAggregationInputObjectSchema } from './objects/ResumeOrderByWithAggregationInput.schema';
import { ResumeScalarWhereWithAggregatesInputObjectSchema } from './objects/ResumeScalarWhereWithAggregatesInput.schema';
import { ResumeScalarFieldEnumSchema } from './enums/ResumeScalarFieldEnum.schema';
import { ResumeCountAggregateInputObjectSchema } from './objects/ResumeCountAggregateInput.schema';
import { ResumeMinAggregateInputObjectSchema } from './objects/ResumeMinAggregateInput.schema';
import { ResumeMaxAggregateInputObjectSchema } from './objects/ResumeMaxAggregateInput.schema';

export const ResumeGroupBySchema = z.object({ where: ResumeWhereInputObjectSchema.optional(), orderBy: z.union([ResumeOrderByWithAggregationInputObjectSchema, ResumeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ResumeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ResumeScalarFieldEnumSchema), _count: z.union([ z.literal(true), ResumeCountAggregateInputObjectSchema ]).optional(), _min: ResumeMinAggregateInputObjectSchema.optional(), _max: ResumeMaxAggregateInputObjectSchema.optional() })