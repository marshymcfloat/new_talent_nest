import { z } from 'zod';
import { ResumeOrderByWithRelationInputObjectSchema } from './objects/ResumeOrderByWithRelationInput.schema';
import { ResumeWhereInputObjectSchema } from './objects/ResumeWhereInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './objects/ResumeWhereUniqueInput.schema';
import { ResumeCountAggregateInputObjectSchema } from './objects/ResumeCountAggregateInput.schema';
import { ResumeMinAggregateInputObjectSchema } from './objects/ResumeMinAggregateInput.schema';
import { ResumeMaxAggregateInputObjectSchema } from './objects/ResumeMaxAggregateInput.schema';

export const ResumeAggregateSchema = z.object({ orderBy: z.union([ResumeOrderByWithRelationInputObjectSchema, ResumeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResumeWhereInputObjectSchema.optional(), cursor: ResumeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ResumeCountAggregateInputObjectSchema ]).optional(), _min: ResumeMinAggregateInputObjectSchema.optional(), _max: ResumeMaxAggregateInputObjectSchema.optional() })