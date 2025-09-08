import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema';
import { EnumCompanyRoleFieldUpdateOperationsInputObjectSchema } from './EnumCompanyRoleFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  companyId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([CompanyRoleSchema, z.lazy(() => EnumCompanyRoleFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CompanyMemberUncheckedUpdateManyWithoutUserInputObjectSchema: z.ZodType<Prisma.CompanyMemberUncheckedUpdateManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUncheckedUpdateManyWithoutUserInput>;
export const CompanyMemberUncheckedUpdateManyWithoutUserInputObjectZodSchema = makeSchema();
