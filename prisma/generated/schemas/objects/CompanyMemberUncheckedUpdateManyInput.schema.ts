import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema';
import { EnumCompanyRoleFieldUpdateOperationsInputObjectSchema } from './EnumCompanyRoleFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  companyId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([CompanyRoleSchema, z.lazy(() => EnumCompanyRoleFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CompanyMemberUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.CompanyMemberUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUncheckedUpdateManyInput>;
export const CompanyMemberUncheckedUpdateManyInputObjectZodSchema = makeSchema();
