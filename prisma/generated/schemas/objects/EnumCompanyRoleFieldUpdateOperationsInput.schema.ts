import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  set: CompanyRoleSchema.optional()
}).strict();
export const EnumCompanyRoleFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumCompanyRoleFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumCompanyRoleFieldUpdateOperationsInput>;
export const EnumCompanyRoleFieldUpdateOperationsInputObjectZodSchema = makeSchema();
