import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { JobListRelationFilterObjectSchema } from './JobListRelationFilter.schema';
import { CompanyMemberListRelationFilterObjectSchema } from './CompanyMemberListRelationFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => CompanyWhereInputObjectSchema), z.lazy(() => CompanyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CompanyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CompanyWhereInputObjectSchema), z.lazy(() => CompanyWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  websiteUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  logoUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  verifiedDomains: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  jobs: z.lazy(() => JobListRelationFilterObjectSchema).optional(),
  members: z.lazy(() => CompanyMemberListRelationFilterObjectSchema).optional()
}).strict();
export const CompanyWhereInputObjectSchema: z.ZodType<Prisma.CompanyWhereInput> = schema as unknown as z.ZodType<Prisma.CompanyWhereInput>;
export const CompanyWhereInputObjectZodSchema = schema;
