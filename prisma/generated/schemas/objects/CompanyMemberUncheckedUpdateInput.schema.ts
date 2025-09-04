import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema';
import { EnumCompanyRoleFieldUpdateOperationsInputObjectSchema } from './EnumCompanyRoleFieldUpdateOperationsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  companyId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([CompanyRoleSchema, z.lazy(() => EnumCompanyRoleFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CompanyMemberUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CompanyMemberUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUncheckedUpdateInput>;
export const CompanyMemberUncheckedUpdateInputObjectZodSchema = makeSchema();
