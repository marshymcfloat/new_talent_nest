import { z } from 'zod';

export const JobScalarFieldEnumSchema = z.enum(['id', 'companyId', 'title', 'location', 'type', 'minSalary', 'maxSalary', 'currency', 'payPeriod', 'jobClass', 'status', 'summary', 'qualifications', 'responsibilities', 'benefits', 'tags', 'createdAt', 'updatedAt'])

export type JobScalarFieldEnum = z.infer<typeof JobScalarFieldEnumSchema>;