import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CompanyIncludeObjectSchema } from './objects/CompanyInclude.schema';
import { CompanyOrderByWithRelationInputObjectSchema } from './objects/CompanyOrderByWithRelationInput.schema';
import { CompanyWhereInputObjectSchema } from './objects/CompanyWhereInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './objects/CompanyWhereUniqueInput.schema';
import { CompanyScalarFieldEnumSchema } from './enums/CompanyScalarFieldEnum.schema';
import { CompanyCountOutputTypeArgsObjectSchema } from './objects/CompanyCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompanyFindManySelectSchema: z.ZodType<Prisma.CompanySelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    websiteUrl: z.boolean().optional(),
    logoUrl: z.boolean().optional(),
    verifiedDomains: z.boolean().optional(),
    jobs: z.boolean().optional(),
    members: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CompanySelect>;

export const CompanyFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    websiteUrl: z.boolean().optional(),
    logoUrl: z.boolean().optional(),
    verifiedDomains: z.boolean().optional(),
    jobs: z.boolean().optional(),
    members: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CompanyFindManySchema: z.ZodType<Prisma.CompanyFindManyArgs> = z.object({ select: CompanyFindManySelectSchema.optional(), include: z.lazy(() => CompanyIncludeObjectSchema.optional()), orderBy: z.union([CompanyOrderByWithRelationInputObjectSchema, CompanyOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyWhereInputObjectSchema.optional(), cursor: CompanyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.CompanyScalarFieldEnum), z.nativeEnum(Prisma.CompanyScalarFieldEnum).array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CompanyFindManyArgs>;

export const CompanyFindManyZodSchema = z.object({ select: CompanyFindManySelectSchema.optional(), include: z.lazy(() => CompanyIncludeObjectSchema.optional()), orderBy: z.union([CompanyOrderByWithRelationInputObjectSchema, CompanyOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyWhereInputObjectSchema.optional(), cursor: CompanyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.CompanyScalarFieldEnum), z.nativeEnum(Prisma.CompanyScalarFieldEnum).array()]).optional() }).strict();