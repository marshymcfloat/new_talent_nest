import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EducationIncludeObjectSchema } from './objects/EducationInclude.schema';
import { EducationOrderByWithRelationInputObjectSchema } from './objects/EducationOrderByWithRelationInput.schema';
import { EducationWhereInputObjectSchema } from './objects/EducationWhereInput.schema';
import { EducationWhereUniqueInputObjectSchema } from './objects/EducationWhereUniqueInput.schema';
import { EducationScalarFieldEnumSchema } from './enums/EducationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EducationFindManySelectSchema: z.ZodType<Prisma.EducationSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    course: z.boolean().optional(),
    institution: z.boolean().optional(),
    highlight: z.boolean().optional(),
    isComplete: z.boolean().optional(),
    finishedYear: z.boolean().optional(),
    expectedFinishMonth: z.boolean().optional(),
    expectedFinishYear: z.boolean().optional(),
    deletedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EducationSelect>;

export const EducationFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    course: z.boolean().optional(),
    institution: z.boolean().optional(),
    highlight: z.boolean().optional(),
    isComplete: z.boolean().optional(),
    finishedYear: z.boolean().optional(),
    expectedFinishMonth: z.boolean().optional(),
    expectedFinishYear: z.boolean().optional(),
    deletedAt: z.boolean().optional()
  }).strict();

export const EducationFindManySchema: z.ZodType<Prisma.EducationFindManyArgs> = z.object({ select: EducationFindManySelectSchema.optional(), include: z.lazy(() => EducationIncludeObjectSchema.optional()), orderBy: z.union([EducationOrderByWithRelationInputObjectSchema, EducationOrderByWithRelationInputObjectSchema.array()]).optional(), where: EducationWhereInputObjectSchema.optional(), cursor: EducationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.EducationScalarFieldEnum), z.nativeEnum(Prisma.EducationScalarFieldEnum).array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EducationFindManyArgs>;

export const EducationFindManyZodSchema = z.object({ select: EducationFindManySelectSchema.optional(), include: z.lazy(() => EducationIncludeObjectSchema.optional()), orderBy: z.union([EducationOrderByWithRelationInputObjectSchema, EducationOrderByWithRelationInputObjectSchema.array()]).optional(), where: EducationWhereInputObjectSchema.optional(), cursor: EducationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.EducationScalarFieldEnum), z.nativeEnum(Prisma.EducationScalarFieldEnum).array()]).optional() }).strict();