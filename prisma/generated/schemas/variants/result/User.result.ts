import { z } from 'zod';

import { UserRoleSchema } from '../../enums/UserRole.schema';
import { UserAvailabilityTypeSchema } from '../../enums/UserAvailabilityType.schema';
import { JobTypeSchema } from '../../enums/JobType.schema';
import { JobClassSchema } from '../../enums/JobClass.schema';
import { UserApproachabilitySchema } from '../../enums/UserApproachability.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    username: z.string().nullable(),
    password: z.string().nullable(),
    role: UserRoleSchema,
    companies: z.array(z.unknown()),
    resumes: z.array(z.unknown()),
    JobApplication: z.array(z.unknown()),
    summary: z.string().nullable(),
    previousCareers: z.array(z.unknown()),
    education: z.array(z.unknown()),
    skills: z.array(z.unknown()),
    languages: z.array(z.unknown()),
    availability: UserAvailabilityTypeSchema.nullable(),
    preferredWorkTypes: JobTypeSchema,
    preferredLocation: z.array(z.string()),
    rightToWork: z.array(z.string()),
    expectedSalary: z.string().nullable(),
    jobClassification: JobClassSchema,
    approachability: UserApproachabilitySchema.nullable(),
    accounts: z.array(z.unknown()),
    sessions: z.array(z.unknown())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
