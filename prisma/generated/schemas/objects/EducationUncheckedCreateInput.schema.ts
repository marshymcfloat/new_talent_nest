import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  userId: z.string(),
  course: z.string(),
  institution: z.string(),
  highlight: z.string().nullish(),
  isComplete: z.boolean(),
  finishedYear: z.number().int().nullish(),
  expectedFinishMonth: z.number().int().nullish(),
  expectedFinishYear: z.number().int().nullish()
}).strict();
export const EducationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EducationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationUncheckedCreateInput>;
export const EducationUncheckedCreateInputObjectZodSchema = makeSchema();
