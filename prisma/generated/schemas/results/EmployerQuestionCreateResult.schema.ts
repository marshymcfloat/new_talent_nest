import { z } from 'zod';
export const EmployerQuestionCreateResultSchema = z.object({
  id: z.string(),
  text: z.string(),
  type: z.unknown(),
  isRequired: z.boolean(),
  options: z.array(z.string()),
  jobId: z.string(),
  Job: z.unknown(),
  answers: z.array(z.unknown())
});