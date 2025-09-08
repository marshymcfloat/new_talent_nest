import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CareerHistorySelectObjectSchema } from './CareerHistorySelect.schema';
import { CareerHistoryIncludeObjectSchema } from './CareerHistoryInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CareerHistorySelectObjectSchema).optional(),
  include: z.lazy(() => CareerHistoryIncludeObjectSchema).optional()
}).strict();
export const CareerHistoryArgsObjectSchema = makeSchema();
export const CareerHistoryArgsObjectZodSchema = makeSchema();
