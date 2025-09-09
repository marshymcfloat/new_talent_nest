import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CompanyQuestionIncludeObjectSchema } from './objects/CompanyQuestionInclude.schema';
import { CompanyQuestionOrderByWithRelationInputObjectSchema } from './objects/CompanyQuestionOrderByWithRelationInput.schema';
import { CompanyQuestionWhereInputObjectSchema } from './objects/CompanyQuestionWhereInput.schema';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './objects/CompanyQuestionWhereUniqueInput.schema';
import { CompanyQuestionScalarFieldEnumSchema } from './enums/CompanyQuestionScalarFieldEnum.schema';
import { CompanyQuestionCountOutputTypeArgsObjectSchema } from './objects/CompanyQuestionCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompanyQuestionFindManySelectSchema: z.ZodType<Prisma.CompanyQuestionSelect> = z.object({
    id: z.boolean().optional(),
    text: z.boolean().optional(),
    type: z.boolean().optional(),
    options: z.boolean().optional(),
    companyId: z.boolean().optional(),
    company: z.boolean().optional(),
    jobs: z.boolean().optional(),
    answers: z.boolean().optional(),
    isArchived: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CompanyQuestionSelect>;

export const CompanyQuestionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    text: z.boolean().optional(),
    type: z.boolean().optional(),
    options: z.boolean().optional(),
    companyId: z.boolean().optional(),
    company: z.boolean().optional(),
    jobs: z.boolean().optional(),
    answers: z.boolean().optional(),
    isArchived: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CompanyQuestionFindManySchema: z.ZodType<Prisma.CompanyQuestionFindManyArgs> = z.object({ select: CompanyQuestionFindManySelectSchema.optional(), include: z.lazy(() => CompanyQuestionIncludeObjectSchema.optional()), orderBy: z.union([CompanyQuestionOrderByWithRelationInputObjectSchema, CompanyQuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyQuestionWhereInputObjectSchema.optional(), cursor: CompanyQuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CompanyQuestionScalarFieldEnumSchema, CompanyQuestionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CompanyQuestionFindManyArgs>;

export const CompanyQuestionFindManyZodSchema = z.object({ select: CompanyQuestionFindManySelectSchema.optional(), include: z.lazy(() => CompanyQuestionIncludeObjectSchema.optional()), orderBy: z.union([CompanyQuestionOrderByWithRelationInputObjectSchema, CompanyQuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyQuestionWhereInputObjectSchema.optional(), cursor: CompanyQuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CompanyQuestionScalarFieldEnumSchema, CompanyQuestionScalarFieldEnumSchema.array()]).optional() }).strict();