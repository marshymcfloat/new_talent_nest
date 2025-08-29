import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerUncheckedCreateNestedManyWithoutJobApplicationInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  jobId: z.string(),
  resumeId: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  answers: z.lazy(() => AnswerUncheckedCreateNestedManyWithoutJobApplicationInputObjectSchema).optional()
}).strict();
export const JobApplicationUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUncheckedCreateWithoutUserInput>;
export const JobApplicationUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
