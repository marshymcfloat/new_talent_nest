import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  userId: z.string(),
  companyId: z.string()
}).strict();
export const CompanyMemberUserIdCompanyIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.CompanyMemberUserIdCompanyIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUserIdCompanyIdCompoundUniqueInput>;
export const CompanyMemberUserIdCompanyIdCompoundUniqueInputObjectZodSchema = makeSchema();
