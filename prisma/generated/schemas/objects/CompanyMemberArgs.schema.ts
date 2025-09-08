import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberSelectObjectSchema } from './CompanyMemberSelect.schema';
import { CompanyMemberIncludeObjectSchema } from './CompanyMemberInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CompanyMemberSelectObjectSchema).optional(),
  include: z.lazy(() => CompanyMemberIncludeObjectSchema).optional()
}).strict();
export const CompanyMemberArgsObjectSchema = makeSchema();
export const CompanyMemberArgsObjectZodSchema = makeSchema();
