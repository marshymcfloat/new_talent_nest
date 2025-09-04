import { z } from 'zod';
import { CompanyMemberOrderByWithRelationInputObjectSchema } from './objects/CompanyMemberOrderByWithRelationInput.schema';
import { CompanyMemberWhereInputObjectSchema } from './objects/CompanyMemberWhereInput.schema';
import { CompanyMemberWhereUniqueInputObjectSchema } from './objects/CompanyMemberWhereUniqueInput.schema';
import { CompanyMemberCountAggregateInputObjectSchema } from './objects/CompanyMemberCountAggregateInput.schema';
import { CompanyMemberMinAggregateInputObjectSchema } from './objects/CompanyMemberMinAggregateInput.schema';
import { CompanyMemberMaxAggregateInputObjectSchema } from './objects/CompanyMemberMaxAggregateInput.schema';

export const CompanyMemberAggregateSchema = z.object({ orderBy: z.union([CompanyMemberOrderByWithRelationInputObjectSchema, CompanyMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyMemberWhereInputObjectSchema.optional(), cursor: CompanyMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CompanyMemberCountAggregateInputObjectSchema ]).optional(), _min: CompanyMemberMinAggregateInputObjectSchema.optional(), _max: CompanyMemberMaxAggregateInputObjectSchema.optional() })