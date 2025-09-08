import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => EducationWhereInputObjectSchema), z.lazy(() => EducationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EducationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EducationWhereInputObjectSchema), z.lazy(() => EducationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  course: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  institution: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  highlight: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isComplete: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  finishedYear: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  expectedFinishMonth: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  expectedFinishYear: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const EducationWhereInputObjectSchema: z.ZodType<Prisma.EducationWhereInput> = schema as unknown as z.ZodType<Prisma.EducationWhereInput>;
export const EducationWhereInputObjectZodSchema = schema;
