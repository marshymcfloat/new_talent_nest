import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema'

const makeSchema = () => z.object({
  userId: z.string(),
  companyId: z.string(),
  role: CompanyRoleSchema.optional()
}).strict();
export const CompanyMemberUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CompanyMemberUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUncheckedCreateInput>;
export const CompanyMemberUncheckedCreateInputObjectZodSchema = makeSchema();
