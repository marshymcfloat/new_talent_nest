import { z } from 'zod';
export const EducationGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  course: z.string(),
  institution: z.string(),
  highlight: z.string(),
  isComplete: z.boolean(),
  finishedYear: z.number().int(),
  expectedFinishMonth: z.number().int(),
  expectedFinishYear: z.number().int(),
  deletedAt: z.date(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    user: z.number(),
    course: z.number(),
    institution: z.number(),
    highlight: z.number(),
    isComplete: z.number(),
    finishedYear: z.number(),
    expectedFinishMonth: z.number(),
    expectedFinishYear: z.number(),
    deletedAt: z.number()
  }).optional(),
  _sum: z.object({
    finishedYear: z.number().nullable(),
    expectedFinishMonth: z.number().nullable(),
    expectedFinishYear: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    finishedYear: z.number().nullable(),
    expectedFinishMonth: z.number().nullable(),
    expectedFinishYear: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    course: z.string().nullable(),
    institution: z.string().nullable(),
    highlight: z.string().nullable(),
    finishedYear: z.number().int().nullable(),
    expectedFinishMonth: z.number().int().nullable(),
    expectedFinishYear: z.number().int().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    course: z.string().nullable(),
    institution: z.string().nullable(),
    highlight: z.string().nullable(),
    finishedYear: z.number().int().nullable(),
    expectedFinishMonth: z.number().int().nullable(),
    expectedFinishYear: z.number().int().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional()
}));