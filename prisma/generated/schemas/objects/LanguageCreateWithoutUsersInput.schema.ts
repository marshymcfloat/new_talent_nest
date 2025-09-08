import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.string()
}).strict();
export const LanguageCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCreateWithoutUsersInput>;
export const LanguageCreateWithoutUsersInputObjectZodSchema = makeSchema();
