import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema';
import { NestedEnumCompanyRoleFilterObjectSchema } from './NestedEnumCompanyRoleFilter.schema'

const makeSchema = () => z.object({
  equals: CompanyRoleSchema.optional(),
  in: CompanyRoleSchema.array().optional(),
  notIn: CompanyRoleSchema.array().optional(),
  not: z.union([CompanyRoleSchema, z.lazy(() => NestedEnumCompanyRoleFilterObjectSchema)]).optional()
}).strict();
export const EnumCompanyRoleFilterObjectSchema: z.ZodType<Prisma.EnumCompanyRoleFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumCompanyRoleFilter>;
export const EnumCompanyRoleFilterObjectZodSchema = makeSchema();
