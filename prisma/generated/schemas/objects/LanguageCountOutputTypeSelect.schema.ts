import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  users: z.boolean().optional()
}).strict();
export const LanguageCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.LanguageCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCountOutputTypeSelect>;
export const LanguageCountOutputTypeSelectObjectZodSchema = makeSchema();
