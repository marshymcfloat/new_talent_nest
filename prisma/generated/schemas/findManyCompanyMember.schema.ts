import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CompanyMemberIncludeObjectSchema } from './objects/CompanyMemberInclude.schema';
import { CompanyMemberOrderByWithRelationInputObjectSchema } from './objects/CompanyMemberOrderByWithRelationInput.schema';
import { CompanyMemberWhereInputObjectSchema } from './objects/CompanyMemberWhereInput.schema';
import { CompanyMemberWhereUniqueInputObjectSchema } from './objects/CompanyMemberWhereUniqueInput.schema';
import { CompanyMemberScalarFieldEnumSchema } from './enums/CompanyMemberScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompanyMemberFindManySelectSchema: z.ZodType<Prisma.CompanyMemberSelect> = z.object({
    userId: z.boolean().optional(),
    companyId: z.boolean().optional(),
    user: z.boolean().optional(),
    company: z.boolean().optional(),
    role: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CompanyMemberSelect>;

export const CompanyMemberFindManySelectZodSchema = z.object({
    userId: z.boolean().optional(),
    companyId: z.boolean().optional(),
    user: z.boolean().optional(),
    company: z.boolean().optional(),
    role: z.boolean().optional()
  }).strict();

export const CompanyMemberFindManySchema: z.ZodType<Prisma.CompanyMemberFindManyArgs> = z.object({ select: CompanyMemberFindManySelectSchema.optional(), include: z.lazy(() => CompanyMemberIncludeObjectSchema.optional()), orderBy: z.union([CompanyMemberOrderByWithRelationInputObjectSchema, CompanyMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyMemberWhereInputObjectSchema.optional(), cursor: CompanyMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.CompanyMemberScalarFieldEnum), z.nativeEnum(Prisma.CompanyMemberScalarFieldEnum).array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CompanyMemberFindManyArgs>;

export const CompanyMemberFindManyZodSchema = z.object({ select: CompanyMemberFindManySelectSchema.optional(), include: z.lazy(() => CompanyMemberIncludeObjectSchema.optional()), orderBy: z.union([CompanyMemberOrderByWithRelationInputObjectSchema, CompanyMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyMemberWhereInputObjectSchema.optional(), cursor: CompanyMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.CompanyMemberScalarFieldEnum), z.nativeEnum(Prisma.CompanyMemberScalarFieldEnum).array()]).optional() }).strict();