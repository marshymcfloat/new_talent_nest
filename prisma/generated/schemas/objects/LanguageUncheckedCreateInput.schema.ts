import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUncheckedCreateNestedManyWithoutLanguagesInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutLanguagesInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutLanguagesInputObjectSchema).optional()
}).strict();
export const LanguageUncheckedCreateInputObjectSchema: z.ZodType<Prisma.LanguageUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUncheckedCreateInput>;
export const LanguageUncheckedCreateInputObjectZodSchema = makeSchema();
