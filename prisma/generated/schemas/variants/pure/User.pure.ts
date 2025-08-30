import { z } from 'zod';

import { UserAvailabilityTypeSchema } from '../../enums/UserAvailabilityType.schema';
import { JobTypeSchema } from '../../enums/JobType.schema';
import { JobClassSchema } from '../../enums/JobClass.schema';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    username: z.string().nullable(),
    password: z.string().nullable(),
    resumes: z.array(z.unknown()),
    JobApplication: z.array(z.unknown()),
    summary: z.string().nullable(),
    previousCareers: z.array(z.unknown()),
    education: z.array(z.unknown()),
    skills: z.array(z.unknown()),
    languages: z.array(z.unknown()),
    availability: UserAvailabilityTypeSchema.nullable(),
    preferredWorkType: JobTypeSchema.nullable(),
    preferredLocation: z.array(z.string()),
    rightToWork: z.array(z.string()),
    expectedSalary: z.string().nullable(),
    jobClassification: JobClassSchema,
    accounts: z.array(z.unknown()),
    sessions: z.array(z.unknown())
}).strict();

export type UserModelType = z.infer<typeof UserModelSchema>;
