import { z } from 'zod';

export const QuestionTypeSchema = z.enum(['TEXT', 'YES_NO', 'MULTIPLE_CHOICE', 'NUMBER'])

export type QuestionType = z.infer<typeof QuestionTypeSchema>;