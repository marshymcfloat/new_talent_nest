import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ResumeIncludeObjectSchema } from './objects/ResumeInclude.schema';
import { ResumeOrderByWithRelationInputObjectSchema } from './objects/ResumeOrderByWithRelationInput.schema';
import { ResumeWhereInputObjectSchema } from './objects/ResumeWhereInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './objects/ResumeWhereUniqueInput.schema';
import { ResumeScalarFieldEnumSchema } from './enums/ResumeScalarFieldEnum.schema';
import { ResumeCountOutputTypeArgsObjectSchema } from './objects/ResumeCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ResumeFindFirstSelectSchema: z.ZodType<Prisma.ResumeSelect> = z.object({
    id: z.boolean().optional(),
    Title: z.boolean().optional(),
    url: z.boolean().optional(),
    isPrimary: z.boolean().optional(),
    userId: z.boolean().optional(),
    User: z.boolean().optional(),
    JobApplications: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ResumeSelect>;

export const ResumeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    Title: z.boolean().optional(),
    url: z.boolean().optional(),
    isPrimary: z.boolean().optional(),
    userId: z.boolean().optional(),
    User: z.boolean().optional(),
    JobApplications: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ResumeFindFirstSchema: z.ZodType<Prisma.ResumeFindFirstArgs> = z.object({ select: ResumeFindFirstSelectSchema.optional(), include: z.lazy(() => ResumeIncludeObjectSchema.optional()), orderBy: z.union([ResumeOrderByWithRelationInputObjectSchema, ResumeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResumeWhereInputObjectSchema.optional(), cursor: ResumeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.ResumeScalarFieldEnum), z.nativeEnum(Prisma.ResumeScalarFieldEnum).array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ResumeFindFirstArgs>;

export const ResumeFindFirstZodSchema = z.object({ select: ResumeFindFirstSelectSchema.optional(), include: z.lazy(() => ResumeIncludeObjectSchema.optional()), orderBy: z.union([ResumeOrderByWithRelationInputObjectSchema, ResumeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResumeWhereInputObjectSchema.optional(), cursor: ResumeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.ResumeScalarFieldEnum), z.nativeEnum(Prisma.ResumeScalarFieldEnum).array()]).optional() }).strict();