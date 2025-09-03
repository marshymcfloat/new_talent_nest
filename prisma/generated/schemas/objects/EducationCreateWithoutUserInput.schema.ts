import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  course: z.string(),
  institution: z.string(),
  highlight: z.string().nullish(),
  isComplete: z.boolean(),
  finishedYear: z.number().int().nullish(),
  expectedFinishMonth: z.number().int().nullish(),
  expectedFinishYear: z.number().int().nullish(),
  deletedAt: z.date().nullish()
}).strict();
export const EducationCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.EducationCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationCreateWithoutUserInput>;
export const EducationCreateWithoutUserInputObjectZodSchema = makeSchema();
