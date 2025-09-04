import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberUserIdCompanyIdCompoundUniqueInputObjectSchema } from './CompanyMemberUserIdCompanyIdCompoundUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  userId_companyId: z.lazy(() => CompanyMemberUserIdCompanyIdCompoundUniqueInputObjectSchema)
}).strict();
export const CompanyMemberWhereUniqueInputObjectSchema: z.ZodType<Prisma.CompanyMemberWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberWhereUniqueInput>;
export const CompanyMemberWhereUniqueInputObjectZodSchema = makeSchema();
