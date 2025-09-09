import { z } from 'zod';
export const CompanyQuestionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  text: z.string(),
  options: z.array(z.string()),
  companyId: z.string(),
  isArchived: z.boolean(),
  _count: z.object({
    id: z.number(),
    text: z.number(),
    type: z.number(),
    options: z.number(),
    companyId: z.number(),
    company: z.number(),
    jobs: z.number(),
    answers: z.number(),
    isArchived: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    text: z.string().nullable(),
    options: z.array(z.string()).nullable(),
    companyId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    text: z.string().nullable(),
    options: z.array(z.string()).nullable(),
    companyId: z.string().nullable()
  }).nullable().optional()
}));