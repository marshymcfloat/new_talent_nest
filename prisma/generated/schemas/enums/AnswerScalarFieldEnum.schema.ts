import { z } from 'zod';

export const AnswerScalarFieldEnumSchema = z.enum(['id', 'text', 'jobApplicationId', 'questionId'])

export type AnswerScalarFieldEnum = z.infer<typeof AnswerScalarFieldEnumSchema>;