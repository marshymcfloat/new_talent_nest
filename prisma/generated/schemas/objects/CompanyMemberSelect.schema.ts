import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { CompanyArgsObjectSchema } from './CompanyArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  userId: z.boolean().optional(),
  companyId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  company: z.union([z.boolean(), z.lazy(() => CompanyArgsObjectSchema)]).optional(),
  role: z.boolean().optional()
}).strict();
export const CompanyMemberSelectObjectSchema: z.ZodType<Prisma.CompanyMemberSelect> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberSelect>;
export const CompanyMemberSelectObjectZodSchema = makeSchema();
