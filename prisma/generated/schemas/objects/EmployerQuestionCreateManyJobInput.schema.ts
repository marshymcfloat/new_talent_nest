import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { EmployerQuestionCreateoptionsInputObjectSchema } from './EmployerQuestionCreateoptionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  isRequired: z.boolean().optional(),
  options: z.union([z.lazy(() => EmployerQuestionCreateoptionsInputObjectSchema), z.string().array()]).optional()
}).strict();
export const EmployerQuestionCreateManyJobInputObjectSchema: z.ZodType<Prisma.EmployerQuestionCreateManyJobInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionCreateManyJobInput>;
export const EmployerQuestionCreateManyJobInputObjectZodSchema = makeSchema();
