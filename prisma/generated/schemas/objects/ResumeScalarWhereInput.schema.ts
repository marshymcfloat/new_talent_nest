import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => ResumeScalarWhereInputObjectSchema), z.lazy(() => ResumeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResumeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResumeScalarWhereInputObjectSchema), z.lazy(() => ResumeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const ResumeScalarWhereInputObjectSchema: z.ZodType<Prisma.ResumeScalarWhereInput> = schema as unknown as z.ZodType<Prisma.ResumeScalarWhereInput>;
export const ResumeScalarWhereInputObjectZodSchema = schema;
