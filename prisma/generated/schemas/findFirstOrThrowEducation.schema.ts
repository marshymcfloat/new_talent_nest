import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EducationIncludeObjectSchema } from './objects/EducationInclude.schema';
import { EducationOrderByWithRelationInputObjectSchema } from './objects/EducationOrderByWithRelationInput.schema';
import { EducationWhereInputObjectSchema } from './objects/EducationWhereInput.schema';
import { EducationWhereUniqueInputObjectSchema } from './objects/EducationWhereUniqueInput.schema';
import { EducationScalarFieldEnumSchema } from './enums/EducationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EducationFindFirstOrThrowSelectSchema: z.ZodType<Prisma.EducationSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    course: z.boolean().optional(),
    institution: z.boolean().optional(),
    dateStarted: z.boolean().optional(),
    dateEnded: z.boolean().optional(),
    highlight: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EducationSelect>;

export const EducationFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    course: z.boolean().optional(),
    institution: z.boolean().optional(),
    dateStarted: z.boolean().optional(),
    dateEnded: z.boolean().optional(),
    highlight: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const EducationFindFirstOrThrowSchema: z.ZodType<Prisma.EducationFindFirstOrThrowArgs> = z.object({ select: EducationFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => EducationIncludeObjectSchema.optional()), orderBy: z.union([EducationOrderByWithRelationInputObjectSchema, EducationOrderByWithRelationInputObjectSchema.array()]).optional(), where: EducationWhereInputObjectSchema.optional(), cursor: EducationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.EducationScalarFieldEnum), z.nativeEnum(Prisma.EducationScalarFieldEnum).array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EducationFindFirstOrThrowArgs>;

export const EducationFindFirstOrThrowZodSchema = z.object({ select: EducationFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => EducationIncludeObjectSchema.optional()), orderBy: z.union([EducationOrderByWithRelationInputObjectSchema, EducationOrderByWithRelationInputObjectSchema.array()]).optional(), where: EducationWhereInputObjectSchema.optional(), cursor: EducationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.EducationScalarFieldEnum), z.nativeEnum(Prisma.EducationScalarFieldEnum).array()]).optional() }).strict();