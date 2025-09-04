import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  userId: z.string(),
  role: CompanyRoleSchema.optional()
}).strict();
export const CompanyMemberUncheckedCreateWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyMemberUncheckedCreateWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUncheckedCreateWithoutCompanyInput>;
export const CompanyMemberUncheckedCreateWithoutCompanyInputObjectZodSchema = makeSchema();
