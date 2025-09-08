import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const CareerHistoryIncludeObjectSchema: z.ZodType<Prisma.CareerHistoryInclude> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryInclude>;
export const CareerHistoryIncludeObjectZodSchema = makeSchema();
