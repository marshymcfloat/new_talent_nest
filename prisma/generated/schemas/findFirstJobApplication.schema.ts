import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JobApplicationIncludeObjectSchema } from './objects/JobApplicationInclude.schema';
import { JobApplicationOrderByWithRelationInputObjectSchema } from './objects/JobApplicationOrderByWithRelationInput.schema';
import { JobApplicationWhereInputObjectSchema } from './objects/JobApplicationWhereInput.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './objects/JobApplicationWhereUniqueInput.schema';
import { JobApplicationScalarFieldEnumSchema } from './enums/JobApplicationScalarFieldEnum.schema';
import { JobApplicationCountOutputTypeArgsObjectSchema } from './objects/JobApplicationCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const JobApplicationFindFirstSelectSchema: z.ZodType<Prisma.JobApplicationSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    jobId: z.boolean().optional(),
    resumeId: z.boolean().optional(),
    resume: z.boolean().optional(),
    Job: z.boolean().optional(),
    User: z.boolean().optional(),
    answers: z.boolean().optional(),
    status: z.boolean().optional(),
    notes: z.boolean().optional(),
    isArchived: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.JobApplicationSelect>;

export const JobApplicationFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    jobId: z.boolean().optional(),
    resumeId: z.boolean().optional(),
    resume: z.boolean().optional(),
    Job: z.boolean().optional(),
    User: z.boolean().optional(),
    answers: z.boolean().optional(),
    status: z.boolean().optional(),
    notes: z.boolean().optional(),
    isArchived: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const JobApplicationFindFirstSchema: z.ZodType<Prisma.JobApplicationFindFirstArgs> = z.object({ select: JobApplicationFindFirstSelectSchema.optional(), include: z.lazy(() => JobApplicationIncludeObjectSchema.optional()), orderBy: z.union([JobApplicationOrderByWithRelationInputObjectSchema, JobApplicationOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobApplicationWhereInputObjectSchema.optional(), cursor: JobApplicationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([JobApplicationScalarFieldEnumSchema, JobApplicationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.JobApplicationFindFirstArgs>;

export const JobApplicationFindFirstZodSchema = z.object({ select: JobApplicationFindFirstSelectSchema.optional(), include: z.lazy(() => JobApplicationIncludeObjectSchema.optional()), orderBy: z.union([JobApplicationOrderByWithRelationInputObjectSchema, JobApplicationOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobApplicationWhereInputObjectSchema.optional(), cursor: JobApplicationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([JobApplicationScalarFieldEnumSchema, JobApplicationScalarFieldEnumSchema.array()]).optional() }).strict();