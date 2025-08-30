import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  userId: z.string(),
  course: z.string(),
  institution: z.string(),
  dateStarted: z.date(),
  dateEnded: z.date(),
  highlight: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const EducationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EducationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationUncheckedCreateInput>;
export const EducationUncheckedCreateInputObjectZodSchema = makeSchema();
