import { z } from 'zod';
export const CompanyUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  websiteUrl: z.string().optional(),
  logoUrl: z.string().optional(),
  verifiedDomains: z.array(z.string()),
  jobs: z.array(z.unknown()),
  members: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});