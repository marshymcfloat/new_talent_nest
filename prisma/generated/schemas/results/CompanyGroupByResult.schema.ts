import { z } from 'zod';
export const CompanyGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  websiteUrl: z.string(),
  logoUrl: z.string(),
  verifiedDomains: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    websiteUrl: z.number(),
    logoUrl: z.number(),
    verifiedDomains: z.number(),
    jobs: z.number(),
    questions: z.number(),
    members: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    websiteUrl: z.string().nullable(),
    logoUrl: z.string().nullable(),
    verifiedDomains: z.array(z.string()).nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    websiteUrl: z.string().nullable(),
    logoUrl: z.string().nullable(),
    verifiedDomains: z.array(z.string()).nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));