import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionSelectObjectSchema } from './CompanyQuestionSelect.schema';
import { CompanyQuestionIncludeObjectSchema } from './CompanyQuestionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CompanyQuestionSelectObjectSchema).optional(),
  include: z.lazy(() => CompanyQuestionIncludeObjectSchema).optional()
}).strict();
export const CompanyQuestionArgsObjectSchema = makeSchema();
export const CompanyQuestionArgsObjectZodSchema = makeSchema();
