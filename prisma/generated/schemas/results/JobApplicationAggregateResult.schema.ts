import { z } from 'zod';
export const JobApplicationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userId: z.number(),
    jobId: z.number(),
    resumeId: z.number(),
    resume: z.number(),
    Job: z.number(),
    User: z.number(),
    answers: z.number(),
    status: z.number(),
    notes: z.number(),
    isArchived: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    jobId: z.string().nullable(),
    resumeId: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    jobId: z.string().nullable(),
    resumeId: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});