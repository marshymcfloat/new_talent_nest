import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { EmployerQuestionCreateoptionsInputObjectSchema } from './EmployerQuestionCreateoptionsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  isRequired: z.boolean().optional(),
  options: z.union([z.lazy(() => EmployerQuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  jobId: z.string()
}).strict();
export const EmployerQuestionCreateManyInputObjectSchema: z.ZodType<Prisma.EmployerQuestionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionCreateManyInput>;
export const EmployerQuestionCreateManyInputObjectZodSchema = makeSchema();
