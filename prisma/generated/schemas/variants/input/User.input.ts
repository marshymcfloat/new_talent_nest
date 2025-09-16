import { z } from 'zod';

import { UserRoleSchema } from '../../enums/UserRole.schema';
import { UserAvailabilityTypeSchema } from '../../enums/UserAvailabilityType.schema';
import { JobTypeSchema } from '../../enums/JobType.schema';
import { JobClassSchema } from '../../enums/JobClass.schema';
import { UserApproachabilitySchema } from '../../enums/UserApproachability.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    username: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    role: UserRoleSchema,
    companies: z.array(z.unknown()),
    resumes: z.array(z.unknown()),
    JobApplication: z.array(z.unknown()),
    summary: z.string().optional().nullable(),
    previousCareers: z.array(z.unknown()),
    education: z.array(z.unknown()),
    skills: z.array(z.unknown()),
    languages: z.array(z.unknown()),
    availability: UserAvailabilityTypeSchema.optional().nullable(),
    preferredWorkTypes: JobTypeSchema,
    preferredLocation: z.array(z.string()),
    rightToWork: z.array(z.string()),
    expectedSalary: z.string().optional().nullable(),
    jobClassification: JobClassSchema,
    approachability: UserApproachabilitySchema.optional().nullable(),
    accounts: z.array(z.unknown()),
    sessions: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
