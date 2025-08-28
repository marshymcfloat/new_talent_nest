import { z } from 'zod';
import { EmployerQuestionWhereInputObjectSchema } from './objects/EmployerQuestionWhereInput.schema';
import { EmployerQuestionOrderByWithAggregationInputObjectSchema } from './objects/EmployerQuestionOrderByWithAggregationInput.schema';
import { EmployerQuestionScalarWhereWithAggregatesInputObjectSchema } from './objects/EmployerQuestionScalarWhereWithAggregatesInput.schema';
import { EmployerQuestionScalarFieldEnumSchema } from './enums/EmployerQuestionScalarFieldEnum.schema';
import { EmployerQuestionCountAggregateInputObjectSchema } from './objects/EmployerQuestionCountAggregateInput.schema';
import { EmployerQuestionMinAggregateInputObjectSchema } from './objects/EmployerQuestionMinAggregateInput.schema';
import { EmployerQuestionMaxAggregateInputObjectSchema } from './objects/EmployerQuestionMaxAggregateInput.schema';

export const EmployerQuestionGroupBySchema = z.object({ where: EmployerQuestionWhereInputObjectSchema.optional(), orderBy: z.union([EmployerQuestionOrderByWithAggregationInputObjectSchema, EmployerQuestionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: EmployerQuestionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(EmployerQuestionScalarFieldEnumSchema), _count: z.union([ z.literal(true), EmployerQuestionCountAggregateInputObjectSchema ]).optional(), _min: EmployerQuestionMinAggregateInputObjectSchema.optional(), _max: EmployerQuestionMaxAggregateInputObjectSchema.optional() })