import { z } from 'zod';
export const CompanyMemberDeleteManyResultSchema = z.object({
  count: z.number()
});