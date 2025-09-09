import { z } from 'zod';
import { CompanyQuestionWhereInputObjectSchema } from './objects/CompanyQuestionWhereInput.schema';
import { CompanyQuestionOrderByWithAggregationInputObjectSchema } from './objects/CompanyQuestionOrderByWithAggregationInput.schema';
import { CompanyQuestionScalarWhereWithAggregatesInputObjectSchema } from './objects/CompanyQuestionScalarWhereWithAggregatesInput.schema';
import { CompanyQuestionScalarFieldEnumSchema } from './enums/CompanyQuestionScalarFieldEnum.schema';
import { CompanyQuestionCountAggregateInputObjectSchema } from './objects/CompanyQuestionCountAggregateInput.schema';
import { CompanyQuestionMinAggregateInputObjectSchema } from './objects/CompanyQuestionMinAggregateInput.schema';
import { CompanyQuestionMaxAggregateInputObjectSchema } from './objects/CompanyQuestionMaxAggregateInput.schema';

export const CompanyQuestionGroupBySchema = z.object({ where: CompanyQuestionWhereInputObjectSchema.optional(), orderBy: z.union([CompanyQuestionOrderByWithAggregationInputObjectSchema, CompanyQuestionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CompanyQuestionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CompanyQuestionScalarFieldEnumSchema), _count: z.union([ z.literal(true), CompanyQuestionCountAggregateInputObjectSchema ]).optional(), _min: CompanyQuestionMinAggregateInputObjectSchema.optional(), _max: CompanyQuestionMaxAggregateInputObjectSchema.optional() })