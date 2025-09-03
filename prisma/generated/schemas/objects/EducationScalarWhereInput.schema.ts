import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  course: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  institution: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  highlight: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  isComplete: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  finishedYear: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).nullish(),
  expectedFinishMonth: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).nullish(),
  expectedFinishYear: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).nullish(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish()
}).strict();
export const EducationScalarWhereInputObjectSchema: z.ZodType<Prisma.EducationScalarWhereInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationScalarWhereInput>;
export const EducationScalarWhereInputObjectZodSchema = makeSchema();
