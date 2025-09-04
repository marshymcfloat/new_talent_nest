import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  companyId: z.string(),
  role: CompanyRoleSchema.optional()
}).strict();
export const CompanyMemberCreateManyUserInputObjectSchema: z.ZodType<Prisma.CompanyMemberCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberCreateManyUserInput>;
export const CompanyMemberCreateManyUserInputObjectZodSchema = makeSchema();
