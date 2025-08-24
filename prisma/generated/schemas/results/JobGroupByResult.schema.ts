import { z } from 'zod';
export const JobGroupByResultSchema = z.array(z.object({
  id: z.string(),
  company: z.string(),
  title: z.string(),
  location: z.string(),
  salary: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    company: z.number(),
    title: z.number(),
    location: z.number(),
    type: z.number(),
    salary: z.number(),
    JobClass: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    JobApplication: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    company: z.string().nullable(),
    title: z.string().nullable(),
    location: z.string().nullable(),
    salary: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    company: z.string().nullable(),
    title: z.string().nullable(),
    location: z.string().nullable(),
    salary: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));