import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CompanyMemberIncludeObjectSchema } from './objects/CompanyMemberInclude.schema';
import { CompanyMemberOrderByWithRelationInputObjectSchema } from './objects/CompanyMemberOrderByWithRelationInput.schema';
import { CompanyMemberWhereInputObjectSchema } from './objects/CompanyMemberWhereInput.schema';
import { CompanyMemberWhereUniqueInputObjectSchema } from './objects/CompanyMemberWhereUniqueInput.schema';
import { CompanyMemberScalarFieldEnumSchema } from './enums/CompanyMemberScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompanyMemberFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CompanyMemberSelect> = z.object({
    userId: z.boolean().optional(),
    companyId: z.boolean().optional(),
    user: z.boolean().optional(),
    company: z.boolean().optional(),
    role: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CompanyMemberSelect>;

export const CompanyMemberFindFirstOrThrowSelectZodSchema = z.object({
    userId: z.boolean().optional(),
    companyId: z.boolean().optional(),
    user: z.boolean().optional(),
    company: z.boolean().optional(),
    role: z.boolean().optional()
  }).strict();

export const CompanyMemberFindFirstOrThrowSchema: z.ZodType<Prisma.CompanyMemberFindFirstOrThrowArgs> = z.object({ select: CompanyMemberFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CompanyMemberIncludeObjectSchema.optional()), orderBy: z.union([CompanyMemberOrderByWithRelationInputObjectSchema, CompanyMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyMemberWhereInputObjectSchema.optional(), cursor: CompanyMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CompanyMemberScalarFieldEnumSchema, CompanyMemberScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CompanyMemberFindFirstOrThrowArgs>;

export const CompanyMemberFindFirstOrThrowZodSchema = z.object({ select: CompanyMemberFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CompanyMemberIncludeObjectSchema.optional()), orderBy: z.union([CompanyMemberOrderByWithRelationInputObjectSchema, CompanyMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyMemberWhereInputObjectSchema.optional(), cursor: CompanyMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CompanyMemberScalarFieldEnumSchema, CompanyMemberScalarFieldEnumSchema.array()]).optional() }).strict();