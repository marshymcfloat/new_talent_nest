import { z } from 'zod';
export const CompanyMemberAggregateResultSchema = z.object({  _count: z.object({
    userId: z.number(),
    companyId: z.number(),
    user: z.number(),
    company: z.number(),
    role: z.number()
  }).optional(),
  _min: z.object({
    userId: z.string().nullable(),
    companyId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    userId: z.string().nullable(),
    companyId: z.string().nullable()
  }).nullable().optional()});