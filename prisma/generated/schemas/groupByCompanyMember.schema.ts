import { z } from 'zod';
import { CompanyMemberWhereInputObjectSchema } from './objects/CompanyMemberWhereInput.schema';
import { CompanyMemberOrderByWithAggregationInputObjectSchema } from './objects/CompanyMemberOrderByWithAggregationInput.schema';
import { CompanyMemberScalarWhereWithAggregatesInputObjectSchema } from './objects/CompanyMemberScalarWhereWithAggregatesInput.schema';
import { CompanyMemberScalarFieldEnumSchema } from './enums/CompanyMemberScalarFieldEnum.schema';
import { CompanyMemberCountAggregateInputObjectSchema } from './objects/CompanyMemberCountAggregateInput.schema';
import { CompanyMemberMinAggregateInputObjectSchema } from './objects/CompanyMemberMinAggregateInput.schema';
import { CompanyMemberMaxAggregateInputObjectSchema } from './objects/CompanyMemberMaxAggregateInput.schema';

export const CompanyMemberGroupBySchema = z.object({ where: CompanyMemberWhereInputObjectSchema.optional(), orderBy: z.union([CompanyMemberOrderByWithAggregationInputObjectSchema, CompanyMemberOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CompanyMemberScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CompanyMemberScalarFieldEnumSchema), _count: z.union([ z.literal(true), CompanyMemberCountAggregateInputObjectSchema ]).optional(), _min: CompanyMemberMinAggregateInputObjectSchema.optional(), _max: CompanyMemberMaxAggregateInputObjectSchema.optional() })