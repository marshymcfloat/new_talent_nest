import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => EducationScalarWhereInputObjectSchema), z.lazy(() => EducationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EducationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EducationScalarWhereInputObjectSchema), z.lazy(() => EducationScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  course: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  institution: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  highlight: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isComplete: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  finishedYear: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  expectedFinishMonth: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  expectedFinishYear: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const EducationScalarWhereInputObjectSchema: z.ZodType<Prisma.EducationScalarWhereInput> = schema as unknown as z.ZodType<Prisma.EducationScalarWhereInput>;
export const EducationScalarWhereInputObjectZodSchema = schema;
