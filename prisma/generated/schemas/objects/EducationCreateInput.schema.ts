import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutEducationInputObjectSchema } from './UserCreateNestedOneWithoutEducationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  course: z.string(),
  institution: z.string(),
  highlight: z.string().optional().nullable(),
  isComplete: z.boolean(),
  finishedYear: z.number().int().optional().nullable(),
  expectedFinishMonth: z.number().int().optional().nullable(),
  expectedFinishYear: z.number().int().optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutEducationInputObjectSchema)
}).strict();
export const EducationCreateInputObjectSchema: z.ZodType<Prisma.EducationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationCreateInput>;
export const EducationCreateInputObjectZodSchema = makeSchema();
