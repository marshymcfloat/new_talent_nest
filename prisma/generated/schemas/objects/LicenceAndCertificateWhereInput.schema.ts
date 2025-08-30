import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  organization: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  dateIssed: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  expiryDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
export const LicenceAndCertificateWhereInputObjectSchema: z.ZodType<Prisma.LicenceAndCertificateWhereInput> = makeSchema() as unknown as z.ZodType<Prisma.LicenceAndCertificateWhereInput>;
export const LicenceAndCertificateWhereInputObjectZodSchema = makeSchema();
