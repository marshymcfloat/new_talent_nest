import { z } from 'zod';

export const AnswerScalarFieldEnumSchema = z.enum(['id', 'text', 'jobApplicationId', 'questionId'])