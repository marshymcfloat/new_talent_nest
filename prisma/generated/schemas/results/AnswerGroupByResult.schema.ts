import { z } from 'zod';
export const AnswerGroupByResultSchema = z.array(z.object({
  id: z.string(),
  text: z.string(),
  jobApplicationId: z.string(),
  questionId: z.string(),
  _count: z.object({
    id: z.number(),
    text: z.number(),
    jobApplicationId: z.number(),
    JobApplication: z.number(),
    questionId: z.number(),
    Question: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    text: z.string().nullable(),
    jobApplicationId: z.string().nullable(),
    questionId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    text: z.string().nullable(),
    jobApplicationId: z.string().nullable(),
    questionId: z.string().nullable()
  }).nullable().optional()
}));