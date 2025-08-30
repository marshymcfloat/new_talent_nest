import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutEducationInputObjectSchema } from './UserCreateNestedOneWithoutEducationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  course: z.string(),
  institution: z.string(),
  dateStarted: z.date(),
  dateEnded: z.date(),
  highlight: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutEducationInputObjectSchema)
}).strict();
export const EducationCreateInputObjectSchema: z.ZodType<Prisma.EducationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationCreateInput>;
export const EducationCreateInputObjectZodSchema = makeSchema();
