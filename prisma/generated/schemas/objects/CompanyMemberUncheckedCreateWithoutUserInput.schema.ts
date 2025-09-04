import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  companyId: z.string(),
  role: CompanyRoleSchema.optional()
}).strict();
export const CompanyMemberUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CompanyMemberUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUncheckedCreateWithoutUserInput>;
export const CompanyMemberUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
