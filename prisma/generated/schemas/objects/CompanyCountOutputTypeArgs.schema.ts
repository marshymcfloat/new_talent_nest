import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCountOutputTypeSelectObjectSchema } from './CompanyCountOutputTypeSelect.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  select: z.lazy(() => CompanyCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CompanyCountOutputTypeArgsObjectSchema = makeSchema();
export const CompanyCountOutputTypeArgsObjectZodSchema = makeSchema();
