import { z } from 'zod';

export const QuestionTypeSchema = z.enum(['TEXT', 'YES_NO', 'MULTIPLE_CHOICE', 'NUMBER'])