import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedManyWithoutLanguagesInputObjectSchema } from './UserCreateNestedManyWithoutLanguagesInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  name: z.string(),
  users: z.lazy(() => UserCreateNestedManyWithoutLanguagesInputObjectSchema).optional()
}).strict();
export const LanguageCreateInputObjectSchema: z.ZodType<Prisma.LanguageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCreateInput>;
export const LanguageCreateInputObjectZodSchema = makeSchema();
