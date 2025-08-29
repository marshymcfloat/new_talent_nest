import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerUncheckedCreateNestedManyWithoutJobApplicationInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  userId: z.string(),
  jobId: z.string(),
  resumeId: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  answers: z.lazy(() => AnswerUncheckedCreateNestedManyWithoutJobApplicationInputObjectSchema).optional()
}).strict();
export const JobApplicationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUncheckedCreateInput>;
export const JobApplicationUncheckedCreateInputObjectZodSchema = makeSchema();
