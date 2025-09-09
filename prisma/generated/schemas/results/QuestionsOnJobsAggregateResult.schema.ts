import { z } from 'zod';
export const QuestionsOnJobsAggregateResultSchema = z.object({  _count: z.object({
    jobId: z.number(),
    questionId: z.number(),
    job: z.number(),
    question: z.number(),
    isRequired: z.number(),
    sortOrder: z.number()
  }).optional(),
  _sum: z.object({
    sortOrder: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    sortOrder: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    jobId: z.string().nullable(),
    questionId: z.string().nullable(),
    sortOrder: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    jobId: z.string().nullable(),
    questionId: z.string().nullable(),
    sortOrder: z.number().int().nullable()
  }).nullable().optional()});