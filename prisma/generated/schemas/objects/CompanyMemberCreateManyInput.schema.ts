import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema'

const makeSchema = () => z.object({
  userId: z.string(),
  companyId: z.string(),
  role: CompanyRoleSchema.optional()
}).strict();
export const CompanyMemberCreateManyInputObjectSchema: z.ZodType<Prisma.CompanyMemberCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberCreateManyInput>;
export const CompanyMemberCreateManyInputObjectZodSchema = makeSchema();
