import { z } from 'zod';
export const ResumeAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    url: z.number(),
    isPrimary: z.number(),
    userId: z.number(),
    User: z.number(),
    JobApplications: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    url: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    url: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});