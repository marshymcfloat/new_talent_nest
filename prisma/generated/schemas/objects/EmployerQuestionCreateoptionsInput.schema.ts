import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  set: z.string().array()
}).strict();
export const EmployerQuestionCreateoptionsInputObjectSchema: z.ZodType<Prisma.EmployerQuestionCreateoptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionCreateoptionsInput>;
export const EmployerQuestionCreateoptionsInputObjectZodSchema = makeSchema();
