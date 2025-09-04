import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumCompanyRoleFilterObjectSchema } from './EnumCompanyRoleFilter.schema';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema';
import { UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { CompanyScalarRelationFilterObjectSchema } from './CompanyScalarRelationFilter.schema';
import { CompanyWhereInputObjectSchema } from './CompanyWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  companyId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumCompanyRoleFilterObjectSchema), CompanyRoleSchema]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  company: z.union([z.lazy(() => CompanyScalarRelationFilterObjectSchema), z.lazy(() => CompanyWhereInputObjectSchema)]).optional()
}).strict();
export const CompanyMemberWhereInputObjectSchema: z.ZodType<Prisma.CompanyMemberWhereInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberWhereInput>;
export const CompanyMemberWhereInputObjectZodSchema = makeSchema();
