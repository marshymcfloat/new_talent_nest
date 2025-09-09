import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { QuestionsOnJobsIncludeObjectSchema } from './objects/QuestionsOnJobsInclude.schema';
import { QuestionsOnJobsOrderByWithRelationInputObjectSchema } from './objects/QuestionsOnJobsOrderByWithRelationInput.schema';
import { QuestionsOnJobsWhereInputObjectSchema } from './objects/QuestionsOnJobsWhereInput.schema';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './objects/QuestionsOnJobsWhereUniqueInput.schema';
import { QuestionsOnJobsScalarFieldEnumSchema } from './enums/QuestionsOnJobsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const QuestionsOnJobsFindFirstSelectSchema: z.ZodType<Prisma.QuestionsOnJobsSelect> = z.object({
    jobId: z.boolean().optional(),
    questionId: z.boolean().optional(),
    job: z.boolean().optional(),
    question: z.boolean().optional(),
    isRequired: z.boolean().optional(),
    sortOrder: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.QuestionsOnJobsSelect>;

export const QuestionsOnJobsFindFirstSelectZodSchema = z.object({
    jobId: z.boolean().optional(),
    questionId: z.boolean().optional(),
    job: z.boolean().optional(),
    question: z.boolean().optional(),
    isRequired: z.boolean().optional(),
    sortOrder: z.boolean().optional()
  }).strict();

export const QuestionsOnJobsFindFirstSchema: z.ZodType<Prisma.QuestionsOnJobsFindFirstArgs> = z.object({ select: QuestionsOnJobsFindFirstSelectSchema.optional(), include: z.lazy(() => QuestionsOnJobsIncludeObjectSchema.optional()), orderBy: z.union([QuestionsOnJobsOrderByWithRelationInputObjectSchema, QuestionsOnJobsOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuestionsOnJobsWhereInputObjectSchema.optional(), cursor: QuestionsOnJobsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([QuestionsOnJobsScalarFieldEnumSchema, QuestionsOnJobsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.QuestionsOnJobsFindFirstArgs>;

export const QuestionsOnJobsFindFirstZodSchema = z.object({ select: QuestionsOnJobsFindFirstSelectSchema.optional(), include: z.lazy(() => QuestionsOnJobsIncludeObjectSchema.optional()), orderBy: z.union([QuestionsOnJobsOrderByWithRelationInputObjectSchema, QuestionsOnJobsOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuestionsOnJobsWhereInputObjectSchema.optional(), cursor: QuestionsOnJobsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([QuestionsOnJobsScalarFieldEnumSchema, QuestionsOnJobsScalarFieldEnumSchema.array()]).optional() }).strict();