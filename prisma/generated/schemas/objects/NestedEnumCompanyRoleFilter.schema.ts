import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: CompanyRoleSchema.optional(),
  in: CompanyRoleSchema.array().optional(),
  notIn: CompanyRoleSchema.array().optional(),
  not: z.union([CompanyRoleSchema, z.lazy(makeSchema)]).optional()
}).strict();
export const NestedEnumCompanyRoleFilterObjectSchema: z.ZodType<Prisma.NestedEnumCompanyRoleFilter> = makeSchema() as unknown as z.ZodType<Prisma.NestedEnumCompanyRoleFilter>;
export const NestedEnumCompanyRoleFilterObjectZodSchema = makeSchema();
