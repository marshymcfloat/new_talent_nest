import { z } from 'zod';

export const JobScalarFieldEnumSchema = z.enum(['id', 'company', 'title', 'location', 'type', 'salary', 'jobClass', 'summary', 'qualifications', 'responsibilities', 'benefits', 'employerQuestions', 'tags', 'createdAt', 'updatedAt'])