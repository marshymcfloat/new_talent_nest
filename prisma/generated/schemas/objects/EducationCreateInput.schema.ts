import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutEducationInputObjectSchema } from './UserCreateNestedOneWithoutEducationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  course: z.string(),
  institution: z.string(),
  highlight: z.string().nullish(),
  isComplete: z.boolean(),
  finishedYear: z.number().int().nullish(),
  expectedFinishMonth: z.number().int().nullish(),
  expectedFinishYear: z.number().int().nullish(),
  user: z.lazy(() => UserCreateNestedOneWithoutEducationInputObjectSchema)
}).strict();
export const EducationCreateInputObjectSchema: z.ZodType<Prisma.EducationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationCreateInput>;
export const EducationCreateInputObjectZodSchema = makeSchema();
