import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumCompanyRoleWithAggregatesFilterObjectSchema } from './EnumCompanyRoleWithAggregatesFilter.schema';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => CompanyMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CompanyMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CompanyMemberScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CompanyMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CompanyMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  companyId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumCompanyRoleWithAggregatesFilterObjectSchema), CompanyRoleSchema]).optional()
}).strict();
export const CompanyMemberScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CompanyMemberScalarWhereWithAggregatesInput> = schema as unknown as z.ZodType<Prisma.CompanyMemberScalarWhereWithAggregatesInput>;
export const CompanyMemberScalarWhereWithAggregatesInputObjectZodSchema = schema;
