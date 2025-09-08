import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => EducationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EducationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EducationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EducationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EducationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  course: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  institution: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  highlight: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  isComplete: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  finishedYear: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  expectedFinishMonth: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  expectedFinishYear: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const EducationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EducationScalarWhereWithAggregatesInput> = schema as unknown as z.ZodType<Prisma.EducationScalarWhereWithAggregatesInput>;
export const EducationScalarWhereWithAggregatesInputObjectZodSchema = schema;
