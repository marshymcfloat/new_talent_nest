import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const CompanyQuestionCreateoptionsInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCreateoptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCreateoptionsInput>;
export const CompanyQuestionCreateoptionsInputObjectZodSchema = makeSchema();
