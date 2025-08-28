import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EmployerQuestionIncludeObjectSchema } from './objects/EmployerQuestionInclude.schema';
import { EmployerQuestionOrderByWithRelationInputObjectSchema } from './objects/EmployerQuestionOrderByWithRelationInput.schema';
import { EmployerQuestionWhereInputObjectSchema } from './objects/EmployerQuestionWhereInput.schema';
import { EmployerQuestionWhereUniqueInputObjectSchema } from './objects/EmployerQuestionWhereUniqueInput.schema';
import { EmployerQuestionScalarFieldEnumSchema } from './enums/EmployerQuestionScalarFieldEnum.schema';
import { EmployerQuestionCountOutputTypeArgsObjectSchema } from './objects/EmployerQuestionCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EmployerQuestionFindFirstSelectSchema: z.ZodType<Prisma.EmployerQuestionSelect> = z.object({
    id: z.boolean().optional(),
    text: z.boolean().optional(),
    type: z.boolean().optional(),
    isRequired: z.boolean().optional(),
    options: z.boolean().optional(),
    jobId: z.boolean().optional(),
    Job: z.boolean().optional(),
    answers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EmployerQuestionSelect>;

export const EmployerQuestionFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    text: z.boolean().optional(),
    type: z.boolean().optional(),
    isRequired: z.boolean().optional(),
    options: z.boolean().optional(),
    jobId: z.boolean().optional(),
    Job: z.boolean().optional(),
    answers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const EmployerQuestionFindFirstSchema: z.ZodType<Prisma.EmployerQuestionFindFirstArgs> = z.object({ select: EmployerQuestionFindFirstSelectSchema.optional(), include: z.lazy(() => EmployerQuestionIncludeObjectSchema.optional()), orderBy: z.union([EmployerQuestionOrderByWithRelationInputObjectSchema, EmployerQuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmployerQuestionWhereInputObjectSchema.optional(), cursor: EmployerQuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.EmployerQuestionScalarFieldEnum), z.nativeEnum(Prisma.EmployerQuestionScalarFieldEnum).array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EmployerQuestionFindFirstArgs>;

export const EmployerQuestionFindFirstZodSchema = z.object({ select: EmployerQuestionFindFirstSelectSchema.optional(), include: z.lazy(() => EmployerQuestionIncludeObjectSchema.optional()), orderBy: z.union([EmployerQuestionOrderByWithRelationInputObjectSchema, EmployerQuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmployerQuestionWhereInputObjectSchema.optional(), cursor: EmployerQuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.EmployerQuestionScalarFieldEnum), z.nativeEnum(Prisma.EmployerQuestionScalarFieldEnum).array()]).optional() }).strict();