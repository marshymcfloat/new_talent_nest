import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CompanyMemberOrderByWithRelationInputObjectSchema } from './objects/CompanyMemberOrderByWithRelationInput.schema';
import { CompanyMemberWhereInputObjectSchema } from './objects/CompanyMemberWhereInput.schema';
import { CompanyMemberWhereUniqueInputObjectSchema } from './objects/CompanyMemberWhereUniqueInput.schema';
import { CompanyMemberCountAggregateInputObjectSchema } from './objects/CompanyMemberCountAggregateInput.schema';

export const CompanyMemberCountSchema: z.ZodType<Prisma.CompanyMemberCountArgs> = z.object({ orderBy: z.union([CompanyMemberOrderByWithRelationInputObjectSchema, CompanyMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyMemberWhereInputObjectSchema.optional(), cursor: CompanyMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CompanyMemberCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CompanyMemberCountArgs>;

export const CompanyMemberCountZodSchema = z.object({ orderBy: z.union([CompanyMemberOrderByWithRelationInputObjectSchema, CompanyMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyMemberWhereInputObjectSchema.optional(), cursor: CompanyMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CompanyMemberCountAggregateInputObjectSchema ]).optional() }).strict();