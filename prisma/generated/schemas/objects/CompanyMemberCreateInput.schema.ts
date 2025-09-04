import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema';
import { UserCreateNestedOneWithoutCompaniesInputObjectSchema } from './UserCreateNestedOneWithoutCompaniesInput.schema';
import { CompanyCreateNestedOneWithoutMembersInputObjectSchema } from './CompanyCreateNestedOneWithoutMembersInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  role: CompanyRoleSchema.optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCompaniesInputObjectSchema),
  company: z.lazy(() => CompanyCreateNestedOneWithoutMembersInputObjectSchema)
}).strict();
export const CompanyMemberCreateInputObjectSchema: z.ZodType<Prisma.CompanyMemberCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberCreateInput>;
export const CompanyMemberCreateInputObjectZodSchema = makeSchema();
