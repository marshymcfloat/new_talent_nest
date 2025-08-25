import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JobApplicationIncludeObjectSchema } from './objects/JobApplicationInclude.schema';
import { JobApplicationOrderByWithRelationInputObjectSchema } from './objects/JobApplicationOrderByWithRelationInput.schema';
import { JobApplicationWhereInputObjectSchema } from './objects/JobApplicationWhereInput.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './objects/JobApplicationWhereUniqueInput.schema';
import { JobApplicationScalarFieldEnumSchema } from './enums/JobApplicationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const JobApplicationFindManySelectSchema: z.ZodType<Prisma.JobApplicationSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    jobId: z.boolean().optional(),
    Job: z.boolean().optional(),
    User: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.JobApplicationSelect>;

export const JobApplicationFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    jobId: z.boolean().optional(),
    Job: z.boolean().optional(),
    User: z.boolean().optional()
  }).strict();

export const JobApplicationFindManySchema: z.ZodType<Prisma.JobApplicationFindManyArgs> = z.object({ select: JobApplicationFindManySelectSchema.optional(), include: z.lazy(() => JobApplicationIncludeObjectSchema.optional()), orderBy: z.union([JobApplicationOrderByWithRelationInputObjectSchema, JobApplicationOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobApplicationWhereInputObjectSchema.optional(), cursor: JobApplicationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.JobApplicationScalarFieldEnum), z.nativeEnum(Prisma.JobApplicationScalarFieldEnum).array()]).optional() }).strict() as unknown as z.ZodType<Prisma.JobApplicationFindManyArgs>;

export const JobApplicationFindManyZodSchema = z.object({ select: JobApplicationFindManySelectSchema.optional(), include: z.lazy(() => JobApplicationIncludeObjectSchema.optional()), orderBy: z.union([JobApplicationOrderByWithRelationInputObjectSchema, JobApplicationOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobApplicationWhereInputObjectSchema.optional(), cursor: JobApplicationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.JobApplicationScalarFieldEnum), z.nativeEnum(Prisma.JobApplicationScalarFieldEnum).array()]).optional() }).strict();