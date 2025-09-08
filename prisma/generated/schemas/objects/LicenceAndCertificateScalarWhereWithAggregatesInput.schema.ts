import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => LicenceAndCertificateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LicenceAndCertificateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LicenceAndCertificateScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LicenceAndCertificateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LicenceAndCertificateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  organization: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  dateIssed: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  expiryDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const LicenceAndCertificateScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.LicenceAndCertificateScalarWhereWithAggregatesInput> = schema as unknown as z.ZodType<Prisma.LicenceAndCertificateScalarWhereWithAggregatesInput>;
export const LicenceAndCertificateScalarWhereWithAggregatesInputObjectZodSchema = schema;
