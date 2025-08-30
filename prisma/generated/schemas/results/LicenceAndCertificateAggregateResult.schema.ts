import { z } from 'zod';
export const LicenceAndCertificateAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    organization: z.number(),
    dateIssed: z.number(),
    expiryDate: z.number(),
    description: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    organization: z.string().nullable(),
    dateIssed: z.date().nullable(),
    expiryDate: z.date().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    organization: z.string().nullable(),
    dateIssed: z.date().nullable(),
    expiryDate: z.date().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});