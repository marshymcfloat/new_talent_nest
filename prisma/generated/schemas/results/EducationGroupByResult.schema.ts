import { z } from 'zod';
export const EducationGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  course: z.string(),
  institution: z.string(),
  dateStarted: z.date(),
  dateEnded: z.date(),
  highlight: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    user: z.number(),
    course: z.number(),
    institution: z.number(),
    dateStarted: z.number(),
    dateEnded: z.number(),
    highlight: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    course: z.string().nullable(),
    institution: z.string().nullable(),
    dateStarted: z.date().nullable(),
    dateEnded: z.date().nullable(),
    highlight: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    course: z.string().nullable(),
    institution: z.string().nullable(),
    dateStarted: z.date().nullable(),
    dateEnded: z.date().nullable(),
    highlight: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));