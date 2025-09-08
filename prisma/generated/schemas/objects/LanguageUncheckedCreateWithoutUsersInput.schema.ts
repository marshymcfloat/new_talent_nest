import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();
export const LanguageUncheckedCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageUncheckedCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUncheckedCreateWithoutUsersInput>;
export const LanguageUncheckedCreateWithoutUsersInputObjectZodSchema = makeSchema();
