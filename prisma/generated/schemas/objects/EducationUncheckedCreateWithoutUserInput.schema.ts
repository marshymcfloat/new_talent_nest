import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  course: z.string(),
  institution: z.string(),
  dateStarted: z.date(),
  dateEnded: z.date(),
  highlight: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const EducationUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.EducationUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationUncheckedCreateWithoutUserInput>;
export const EducationUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
