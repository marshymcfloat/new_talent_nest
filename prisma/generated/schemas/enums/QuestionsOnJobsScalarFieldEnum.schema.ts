import { z } from 'zod';

export const QuestionsOnJobsScalarFieldEnumSchema = z.enum(['jobId', 'questionId', 'isRequired', 'sortOrder'])

export type QuestionsOnJobsScalarFieldEnum = z.infer<typeof QuestionsOnJobsScalarFieldEnumSchema>;