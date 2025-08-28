import { z } from 'zod';
export const JobApplicationGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  jobId: z.string(),
  resumeId: z.string(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    jobId: z.number(),
    resumeId: z.number(),
    resume: z.number(),
    Job: z.number(),
    User: z.number(),
    answers: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    jobId: z.string().nullable(),
    resumeId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    jobId: z.string().nullable(),
    resumeId: z.string().nullable()
  }).nullable().optional()
}));