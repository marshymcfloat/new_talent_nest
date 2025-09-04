import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema';
import { EnumCompanyRoleFieldUpdateOperationsInputObjectSchema } from './EnumCompanyRoleFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCompaniesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCompaniesNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  role: z.union([CompanyRoleSchema, z.lazy(() => EnumCompanyRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCompaniesNestedInputObjectSchema).optional()
}).strict();
export const CompanyMemberUpdateWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyMemberUpdateWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUpdateWithoutCompanyInput>;
export const CompanyMemberUpdateWithoutCompanyInputObjectZodSchema = makeSchema();
