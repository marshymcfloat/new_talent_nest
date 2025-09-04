import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema';
import { EnumCompanyRoleFieldUpdateOperationsInputObjectSchema } from './EnumCompanyRoleFieldUpdateOperationsInput.schema';
import { CompanyUpdateOneRequiredWithoutMembersNestedInputObjectSchema } from './CompanyUpdateOneRequiredWithoutMembersNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  role: z.union([CompanyRoleSchema, z.lazy(() => EnumCompanyRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutMembersNestedInputObjectSchema).optional()
}).strict();
export const CompanyMemberUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.CompanyMemberUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUpdateWithoutUserInput>;
export const CompanyMemberUpdateWithoutUserInputObjectZodSchema = makeSchema();
