import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const EducationIncludeObjectSchema: z.ZodType<Prisma.EducationInclude> = makeSchema() as unknown as z.ZodType<Prisma.EducationInclude>;
export const EducationIncludeObjectZodSchema = makeSchema();
