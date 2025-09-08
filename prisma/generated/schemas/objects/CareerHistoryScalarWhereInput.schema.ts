import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => CareerHistoryScalarWhereInputObjectSchema), z.lazy(() => CareerHistoryScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CareerHistoryScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CareerHistoryScalarWhereInputObjectSchema), z.lazy(() => CareerHistoryScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  company: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  dateStarted: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  dateEnded: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const CareerHistoryScalarWhereInputObjectSchema: z.ZodType<Prisma.CareerHistoryScalarWhereInput> = schema as unknown as z.ZodType<Prisma.CareerHistoryScalarWhereInput>;
export const CareerHistoryScalarWhereInputObjectZodSchema = schema;
