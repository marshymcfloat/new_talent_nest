import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  jobs: z.boolean().optional(),
  answers: z.boolean().optional()
}).strict();
export const CompanyQuestionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CompanyQuestionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCountOutputTypeSelect>;
export const CompanyQuestionCountOutputTypeSelectObjectZodSchema = makeSchema();
