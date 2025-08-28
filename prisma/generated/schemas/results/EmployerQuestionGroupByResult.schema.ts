import { z } from 'zod';
export const EmployerQuestionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  text: z.string(),
  isRequired: z.boolean(),
  options: z.array(z.string()),
  jobId: z.string(),
  _count: z.object({
    id: z.number(),
    text: z.number(),
    type: z.number(),
    isRequired: z.number(),
    options: z.number(),
    jobId: z.number(),
    Job: z.number(),
    answers: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    text: z.string().nullable(),
    options: z.array(z.string()).nullable(),
    jobId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    text: z.string().nullable(),
    options: z.array(z.string()).nullable(),
    jobId: z.string().nullable()
  }).nullable().optional()
}));