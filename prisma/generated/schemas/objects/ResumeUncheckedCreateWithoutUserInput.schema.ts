import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationUncheckedCreateNestedManyWithoutResumeInputObjectSchema } from './JobApplicationUncheckedCreateNestedManyWithoutResumeInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  JobApplications: z.lazy(() => JobApplicationUncheckedCreateNestedManyWithoutResumeInputObjectSchema).optional()
}).strict();
export const ResumeUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ResumeUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeUncheckedCreateWithoutUserInput>;
export const ResumeUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
