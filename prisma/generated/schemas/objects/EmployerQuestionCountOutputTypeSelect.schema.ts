import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  answers: z.boolean().optional()
}).strict();
export const EmployerQuestionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EmployerQuestionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionCountOutputTypeSelect>;
export const EmployerQuestionCountOutputTypeSelectObjectZodSchema = makeSchema();
