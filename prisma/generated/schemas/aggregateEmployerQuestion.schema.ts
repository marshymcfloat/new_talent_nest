import { z } from 'zod';
import { EmployerQuestionOrderByWithRelationInputObjectSchema } from './objects/EmployerQuestionOrderByWithRelationInput.schema';
import { EmployerQuestionWhereInputObjectSchema } from './objects/EmployerQuestionWhereInput.schema';
import { EmployerQuestionWhereUniqueInputObjectSchema } from './objects/EmployerQuestionWhereUniqueInput.schema';
import { EmployerQuestionCountAggregateInputObjectSchema } from './objects/EmployerQuestionCountAggregateInput.schema';
import { EmployerQuestionMinAggregateInputObjectSchema } from './objects/EmployerQuestionMinAggregateInput.schema';
import { EmployerQuestionMaxAggregateInputObjectSchema } from './objects/EmployerQuestionMaxAggregateInput.schema';

export const EmployerQuestionAggregateSchema = z.object({ orderBy: z.union([EmployerQuestionOrderByWithRelationInputObjectSchema, EmployerQuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmployerQuestionWhereInputObjectSchema.optional(), cursor: EmployerQuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EmployerQuestionCountAggregateInputObjectSchema ]).optional(), _min: EmployerQuestionMinAggregateInputObjectSchema.optional(), _max: EmployerQuestionMaxAggregateInputObjectSchema.optional() })