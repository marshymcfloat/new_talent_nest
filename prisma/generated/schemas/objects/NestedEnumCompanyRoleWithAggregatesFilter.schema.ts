import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumCompanyRoleFilterObjectSchema } from './NestedEnumCompanyRoleFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: CompanyRoleSchema.optional(),
  in: CompanyRoleSchema.array().optional(),
  notIn: CompanyRoleSchema.array().optional(),
  not: z.union([CompanyRoleSchema, z.lazy(makeSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumCompanyRoleFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumCompanyRoleFilterObjectSchema).optional()
}).strict();
export const NestedEnumCompanyRoleWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumCompanyRoleWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.NestedEnumCompanyRoleWithAggregatesFilter>;
export const NestedEnumCompanyRoleWithAggregatesFilterObjectZodSchema = makeSchema();
