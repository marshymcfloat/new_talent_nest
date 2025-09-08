import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  course: z.string(),
  institution: z.string(),
  highlight: z.string().optional().nullable(),
  isComplete: z.boolean(),
  finishedYear: z.number().int().optional().nullable(),
  expectedFinishMonth: z.number().int().optional().nullable(),
  expectedFinishYear: z.number().int().optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const EducationCreateManyInputObjectSchema: z.ZodType<Prisma.EducationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationCreateManyInput>;
export const EducationCreateManyInputObjectZodSchema = makeSchema();
