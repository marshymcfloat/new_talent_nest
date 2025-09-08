import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => LicenceAndCertificateWhereInputObjectSchema), z.lazy(() => LicenceAndCertificateWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LicenceAndCertificateWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LicenceAndCertificateWhereInputObjectSchema), z.lazy(() => LicenceAndCertificateWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  organization: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  dateIssed: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  expiryDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const LicenceAndCertificateWhereInputObjectSchema: z.ZodType<Prisma.LicenceAndCertificateWhereInput> = schema as unknown as z.ZodType<Prisma.LicenceAndCertificateWhereInput>;
export const LicenceAndCertificateWhereInputObjectZodSchema = schema;
