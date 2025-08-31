import { z } from 'zod';
import { EducationOrderByWithRelationInputObjectSchema } from './objects/EducationOrderByWithRelationInput.schema';
import { EducationWhereInputObjectSchema } from './objects/EducationWhereInput.schema';
import { EducationWhereUniqueInputObjectSchema } from './objects/EducationWhereUniqueInput.schema';
import { EducationCountAggregateInputObjectSchema } from './objects/EducationCountAggregateInput.schema';
import { EducationMinAggregateInputObjectSchema } from './objects/EducationMinAggregateInput.schema';
import { EducationMaxAggregateInputObjectSchema } from './objects/EducationMaxAggregateInput.schema';
import { EducationAvgAggregateInputObjectSchema } from './objects/EducationAvgAggregateInput.schema';
import { EducationSumAggregateInputObjectSchema } from './objects/EducationSumAggregateInput.schema';

export const EducationAggregateSchema = z.object({ orderBy: z.union([EducationOrderByWithRelationInputObjectSchema, EducationOrderByWithRelationInputObjectSchema.array()]).optional(), where: EducationWhereInputObjectSchema.optional(), cursor: EducationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EducationCountAggregateInputObjectSchema ]).optional(), _min: EducationMinAggregateInputObjectSchema.optional(), _max: EducationMaxAggregateInputObjectSchema.optional(), _avg: EducationAvgAggregateInputObjectSchema.optional(), _sum: EducationSumAggregateInputObjectSchema.optional() })