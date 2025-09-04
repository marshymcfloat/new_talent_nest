import { z } from 'zod';
export const CompanyMemberDeleteResultSchema = z.nullable(z.object({
  userId: z.string(),
  companyId: z.string(),
  user: z.unknown(),
  company: z.unknown(),
  role: z.unknown()
}));