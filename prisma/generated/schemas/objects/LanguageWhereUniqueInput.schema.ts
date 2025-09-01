import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.number().int(),
  name: z.string()
}).strict();
export const LanguageWhereUniqueInputObjectSchema: z.ZodType<Prisma.LanguageWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageWhereUniqueInput>;
export const LanguageWhereUniqueInputObjectZodSchema = makeSchema();
