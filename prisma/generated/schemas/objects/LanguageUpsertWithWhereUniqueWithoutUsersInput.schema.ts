import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema';
import { LanguageUpdateWithoutUsersInputObjectSchema } from './LanguageUpdateWithoutUsersInput.schema';
import { LanguageUncheckedUpdateWithoutUsersInputObjectSchema } from './LanguageUncheckedUpdateWithoutUsersInput.schema';
import { LanguageCreateWithoutUsersInputObjectSchema } from './LanguageCreateWithoutUsersInput.schema';
import { LanguageUncheckedCreateWithoutUsersInputObjectSchema } from './LanguageUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LanguageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => LanguageUpdateWithoutUsersInputObjectSchema), z.lazy(() => LanguageUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => LanguageCreateWithoutUsersInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const LanguageUpsertWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageUpsertWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpsertWithWhereUniqueWithoutUsersInput>;
export const LanguageUpsertWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
