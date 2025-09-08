import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();
export const LanguageCreateManyInputObjectSchema: z.ZodType<Prisma.LanguageCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCreateManyInput>;
export const LanguageCreateManyInputObjectZodSchema = makeSchema();
