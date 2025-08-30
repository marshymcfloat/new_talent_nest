import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema';
import { UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema';
import { UserCountOutputTypeArgsObjectSchema } from './objects/UserCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindFirstSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    image: z.boolean().optional(),
    username: z.boolean().optional(),
    password: z.boolean().optional(),
    resumes: z.boolean().optional(),
    JobApplication: z.boolean().optional(),
    summary: z.boolean().optional(),
    previousCareers: z.boolean().optional(),
    education: z.boolean().optional(),
    skills: z.boolean().optional(),
    languages: z.boolean().optional(),
    availability: z.boolean().optional(),
    preferredWorkType: z.boolean().optional(),
    preferredLocation: z.boolean().optional(),
    rightToWork: z.boolean().optional(),
    expectedSalary: z.boolean().optional(),
    jobClassification: z.boolean().optional(),
    accounts: z.boolean().optional(),
    sessions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserSelect>;

export const UserFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    image: z.boolean().optional(),
    username: z.boolean().optional(),
    password: z.boolean().optional(),
    resumes: z.boolean().optional(),
    JobApplication: z.boolean().optional(),
    summary: z.boolean().optional(),
    previousCareers: z.boolean().optional(),
    education: z.boolean().optional(),
    skills: z.boolean().optional(),
    languages: z.boolean().optional(),
    availability: z.boolean().optional(),
    preferredWorkType: z.boolean().optional(),
    preferredLocation: z.boolean().optional(),
    rightToWork: z.boolean().optional(),
    expectedSalary: z.boolean().optional(),
    jobClassification: z.boolean().optional(),
    accounts: z.boolean().optional(),
    sessions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const UserFindFirstSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({ select: UserFindFirstSelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.UserScalarFieldEnum), z.nativeEnum(Prisma.UserScalarFieldEnum).array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserFindFirstArgs>;

export const UserFindFirstZodSchema = z.object({ select: UserFindFirstSelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([z.nativeEnum(Prisma.UserScalarFieldEnum), z.nativeEnum(Prisma.UserScalarFieldEnum).array()]).optional() }).strict();