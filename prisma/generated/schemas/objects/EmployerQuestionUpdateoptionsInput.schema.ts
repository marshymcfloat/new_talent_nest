import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const EmployerQuestionUpdateoptionsInputObjectSchema: z.ZodType<Prisma.EmployerQuestionUpdateoptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionUpdateoptionsInput>;
export const EmployerQuestionUpdateoptionsInputObjectZodSchema = makeSchema();
