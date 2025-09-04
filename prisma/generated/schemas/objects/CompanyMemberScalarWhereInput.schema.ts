import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumCompanyRoleFilterObjectSchema } from './EnumCompanyRoleFilter.schema';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  companyId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumCompanyRoleFilterObjectSchema), CompanyRoleSchema]).optional()
}).strict();
export const CompanyMemberScalarWhereInputObjectSchema: z.ZodType<Prisma.CompanyMemberScalarWhereInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberScalarWhereInput>;
export const CompanyMemberScalarWhereInputObjectZodSchema = makeSchema();
