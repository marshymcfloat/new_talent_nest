import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionCountOutputTypeSelectObjectSchema } from './CompanyQuestionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CompanyQuestionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CompanyQuestionCountOutputTypeArgsObjectSchema = makeSchema();
export const CompanyQuestionCountOutputTypeArgsObjectZodSchema = makeSchema();
