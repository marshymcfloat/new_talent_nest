import { z } from 'zod';
import { EducationWhereInputObjectSchema } from './objects/EducationWhereInput.schema';
import { EducationOrderByWithAggregationInputObjectSchema } from './objects/EducationOrderByWithAggregationInput.schema';
import { EducationScalarWhereWithAggregatesInputObjectSchema } from './objects/EducationScalarWhereWithAggregatesInput.schema';
import { EducationScalarFieldEnumSchema } from './enums/EducationScalarFieldEnum.schema';
import { EducationCountAggregateInputObjectSchema } from './objects/EducationCountAggregateInput.schema';
import { EducationMinAggregateInputObjectSchema } from './objects/EducationMinAggregateInput.schema';
import { EducationMaxAggregateInputObjectSchema } from './objects/EducationMaxAggregateInput.schema';

export const EducationGroupBySchema = z.object({ where: EducationWhereInputObjectSchema.optional(), orderBy: z.union([EducationOrderByWithAggregationInputObjectSchema, EducationOrderByWithAggregationInputObjectSchema.array()]).optional(), having: EducationScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(EducationScalarFieldEnumSchema), _count: z.union([ z.literal(true), EducationCountAggregateInputObjectSchema ]).optional(), _min: EducationMinAggregateInputObjectSchema.optional(), _max: EducationMaxAggregateInputObjectSchema.optional() })