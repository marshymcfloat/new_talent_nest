import { z } from 'zod';
export const ResumeGroupByResultSchema = z.array(z.object({
  id: z.string(),
  Title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    Title: z.number(),
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
    Title: z.string().nullable(),
    url: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    Title: z.string().nullable(),
    url: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));