import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AnswerIncludeObjectSchema } from './objects/AnswerInclude.schema';
import { AnswerOrderByWithRelationInputObjectSchema } from './objects/AnswerOrderByWithRelationInput.schema';
import { AnswerWhereInputObjectSchema } from './objects/AnswerWhereInput.schema';
import { AnswerWhereUniqueInputObjectSchema } from './objects/AnswerWhereUniqueInput.schema';
import { AnswerScalarFieldEnumSchema } from './enums/AnswerScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AnswerFindManySelectSchema: z.ZodType<Prisma.AnswerSelect> = z.object({
    id: z.boolean().optional(),
    text: z.boolean().optional(),
    jobApplicationId: z.boolean().optional(),
    JobApplication: z.boolean().optional(),
    questionId: z.boolean().optional(),
    Question: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AnswerSelect>;

export const AnswerFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    text: z.boolean().optional(),
    jobApplicationId: z.boolean().optional(),
    JobApplication: z.boolean().optional(),
    questionId: z.boolean().optional(),
    Question: z.boolean().optional()
  }).strict();

export const AnswerFindManySchema: z.ZodType<Prisma.AnswerFindManyArgs> = z.object({ select: AnswerFindManySelectSchema.optional(), include: z.lazy(() => AnswerIncludeObjectSchema.optional()), orderBy: z.union([AnswerOrderByWithRelationInputObjectSchema, AnswerOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnswerWhereInputObjectSchema.optional(), cursor: AnswerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.AnswerScalarFieldEnum), z.nativeEnum(Prisma.AnswerScalarFieldEnum).array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AnswerFindManyArgs>;

export const AnswerFindManyZodSchema = z.object({ select: AnswerFindManySelectSchema.optional(), include: z.lazy(() => AnswerIncludeObjectSchema.optional()), orderBy: z.union([AnswerOrderByWithRelationInputObjectSchema, AnswerOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnswerWhereInputObjectSchema.optional(), cursor: AnswerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.AnswerScalarFieldEnum), z.nativeEnum(Prisma.AnswerScalarFieldEnum).array()]).optional() }).strict();