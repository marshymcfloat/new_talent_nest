import { z } from 'zod';

export const JobScalarFieldEnumSchema = z.enum(['id', 'companyId', 'title', 'location', 'type', 'salary', 'jobClass', 'summary', 'qualifications', 'responsibilities', 'benefits', 'tags', 'createdAt', 'updatedAt'])