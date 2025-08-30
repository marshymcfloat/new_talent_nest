import { z } from 'zod';
export const LicenceAndCertificateFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  organization: z.string().optional(),
  dateIssed: z.date().optional(),
  expiryDate: z.date().optional(),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));