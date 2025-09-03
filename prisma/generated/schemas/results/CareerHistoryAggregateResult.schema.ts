import { z } from 'zod';
export const CareerHistoryAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    company: z.number(),
    dateStarted: z.number(),
    dateEnded: z.number(),
    description: z.number(),
    userId: z.number(),
    user: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    company: z.string().nullable(),
    dateStarted: z.date().nullable(),
    dateEnded: z.date().nullable(),
    description: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    company: z.string().nullable(),
    dateStarted: z.date().nullable(),
    dateEnded: z.date().nullable(),
    description: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional()});