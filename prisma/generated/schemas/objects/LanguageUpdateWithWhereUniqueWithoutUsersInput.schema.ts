import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema';
import { LanguageUpdateWithoutUsersInputObjectSchema } from './LanguageUpdateWithoutUsersInput.schema';
import { LanguageUncheckedUpdateWithoutUsersInputObjectSchema } from './LanguageUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LanguageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => LanguageUpdateWithoutUsersInputObjectSchema), z.lazy(() => LanguageUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const LanguageUpdateWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageUpdateWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateWithWhereUniqueWithoutUsersInput>;
export const LanguageUpdateWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
