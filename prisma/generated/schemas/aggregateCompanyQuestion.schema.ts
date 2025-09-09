import { z } from 'zod';
import { CompanyQuestionOrderByWithRelationInputObjectSchema } from './objects/CompanyQuestionOrderByWithRelationInput.schema';
import { CompanyQuestionWhereInputObjectSchema } from './objects/CompanyQuestionWhereInput.schema';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './objects/CompanyQuestionWhereUniqueInput.schema';
import { CompanyQuestionCountAggregateInputObjectSchema } from './objects/CompanyQuestionCountAggregateInput.schema';
import { CompanyQuestionMinAggregateInputObjectSchema } from './objects/CompanyQuestionMinAggregateInput.schema';
import { CompanyQuestionMaxAggregateInputObjectSchema } from './objects/CompanyQuestionMaxAggregateInput.schema';

export const CompanyQuestionAggregateSchema = z.object({ orderBy: z.union([CompanyQuestionOrderByWithRelationInputObjectSchema, CompanyQuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyQuestionWhereInputObjectSchema.optional(), cursor: CompanyQuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CompanyQuestionCountAggregateInputObjectSchema ]).optional(), _min: CompanyQuestionMinAggregateInputObjectSchema.optional(), _max: CompanyQuestionMaxAggregateInputObjectSchema.optional() })