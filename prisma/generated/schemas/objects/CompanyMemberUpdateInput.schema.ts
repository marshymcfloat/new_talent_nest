import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema';
import { EnumCompanyRoleFieldUpdateOperationsInputObjectSchema } from './EnumCompanyRoleFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCompaniesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCompaniesNestedInput.schema';
import { CompanyUpdateOneRequiredWithoutMembersNestedInputObjectSchema } from './CompanyUpdateOneRequiredWithoutMembersNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  role: z.union([CompanyRoleSchema, z.lazy(() => EnumCompanyRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCompaniesNestedInputObjectSchema).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutMembersNestedInputObjectSchema).optional()
}).strict();
export const CompanyMemberUpdateInputObjectSchema: z.ZodType<Prisma.CompanyMemberUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUpdateInput>;
export const CompanyMemberUpdateInputObjectZodSchema = makeSchema();
