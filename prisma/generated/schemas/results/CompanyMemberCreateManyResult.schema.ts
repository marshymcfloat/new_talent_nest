import { z } from 'zod';
export const CompanyMemberCreateManyResultSchema = z.object({
  count: z.number()
});