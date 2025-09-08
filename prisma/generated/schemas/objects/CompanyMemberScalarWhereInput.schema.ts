import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumCompanyRoleFilterObjectSchema } from './EnumCompanyRoleFilter.schema';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => CompanyMemberScalarWhereInputObjectSchema), z.lazy(() => CompanyMemberScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CompanyMemberScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CompanyMemberScalarWhereInputObjectSchema), z.lazy(() => CompanyMemberScalarWhereInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  companyId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumCompanyRoleFilterObjectSchema), CompanyRoleSchema]).optional()
}).strict();
export const CompanyMemberScalarWhereInputObjectSchema: z.ZodType<Prisma.CompanyMemberScalarWhereInput> = schema as unknown as z.ZodType<Prisma.CompanyMemberScalarWhereInput>;
export const CompanyMemberScalarWhereInputObjectZodSchema = schema;
