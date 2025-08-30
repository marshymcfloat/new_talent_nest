import { z } from 'zod';
export const EducationAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});