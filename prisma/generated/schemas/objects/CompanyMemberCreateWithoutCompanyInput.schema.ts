import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema';
import { UserCreateNestedOneWithoutCompaniesInputObjectSchema } from './UserCreateNestedOneWithoutCompaniesInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  role: CompanyRoleSchema.optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCompaniesInputObjectSchema)
}).strict();
export const CompanyMemberCreateWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyMemberCreateWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberCreateWithoutCompanyInput>;
export const CompanyMemberCreateWithoutCompanyInputObjectZodSchema = makeSchema();
