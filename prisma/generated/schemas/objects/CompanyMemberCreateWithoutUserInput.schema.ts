import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyRoleSchema } from '../enums/CompanyRole.schema';
import { CompanyCreateNestedOneWithoutMembersInputObjectSchema } from './CompanyCreateNestedOneWithoutMembersInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  role: CompanyRoleSchema.optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutMembersInputObjectSchema)
}).strict();
export const CompanyMemberCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CompanyMemberCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberCreateWithoutUserInput>;
export const CompanyMemberCreateWithoutUserInputObjectZodSchema = makeSchema();
