import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JobIncludeObjectSchema } from './objects/JobInclude.schema';
import { JobOrderByWithRelationInputObjectSchema } from './objects/JobOrderByWithRelationInput.schema';
import { JobWhereInputObjectSchema } from './objects/JobWhereInput.schema';
import { JobWhereUniqueInputObjectSchema } from './objects/JobWhereUniqueInput.schema';
import { JobScalarFieldEnumSchema } from './enums/JobScalarFieldEnum.schema';
import { JobCountOutputTypeArgsObjectSchema } from './objects/JobCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const JobFindFirstOrThrowSelectSchema: z.ZodType<Prisma.JobSelect> = z.object({
    id: z.boolean().optional(),
    company: z.boolean().optional(),
    title: z.boolean().optional(),
    location: z.boolean().optional(),
    type: z.boolean().optional(),
    salary: z.boolean().optional(),
    JobClass: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    JobApplication: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const JobFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    company: z.boolean().optional(),
    title: z.boolean().optional(),
    location: z.boolean().optional(),
    type: z.boolean().optional(),
    salary: z.boolean().optional(),
    JobClass: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    JobApplication: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const JobFindFirstOrThrowSchema: z.ZodType<Prisma.JobFindFirstOrThrowArgs> = z.object({ select: JobFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => JobIncludeObjectSchema.optional()), orderBy: z.union([JobOrderByWithRelationInputObjectSchema, JobOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobWhereInputObjectSchema.optional(), cursor: JobWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.JobScalarFieldEnum), z.nativeEnum(Prisma.JobScalarFieldEnum).array()]).optional() }).strict();

export const JobFindFirstOrThrowZodSchema = z.object({ select: JobFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => JobIncludeObjectSchema.optional()), orderBy: z.union([JobOrderByWithRelationInputObjectSchema, JobOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobWhereInputObjectSchema.optional(), cursor: JobWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.JobScalarFieldEnum), z.nativeEnum(Prisma.JobScalarFieldEnum).array()]).optional() }).strict();