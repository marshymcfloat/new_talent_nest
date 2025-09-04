import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  userId: z.string(),
  role: CompanyRoleSchema.optional()
}).strict();
export const CompanyMemberCreateManyCompanyInputObjectSchema: z.ZodType<Prisma.CompanyMemberCreateManyCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberCreateManyCompanyInput>;
export const CompanyMemberCreateManyCompanyInputObjectZodSchema = makeSchema();
