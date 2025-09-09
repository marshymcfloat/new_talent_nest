import { z } from 'zod';
export const CompanyQuestionUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  text: z.string(),
  type: z.unknown(),
  options: z.array(z.string()),
  companyId: z.string(),
  company: z.unknown(),
  jobs: z.array(z.unknown()),
  answers: z.array(z.unknown()),
  isArchived: z.boolean()
}));