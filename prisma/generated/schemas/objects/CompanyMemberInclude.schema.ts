import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { CompanyArgsObjectSchema } from './CompanyArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  company: z.union([z.boolean(), z.lazy(() => CompanyArgsObjectSchema)]).optional()
}).strict();
export const CompanyMemberIncludeObjectSchema: z.ZodType<Prisma.CompanyMemberInclude> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberInclude>;
export const CompanyMemberIncludeObjectZodSchema = makeSchema();
