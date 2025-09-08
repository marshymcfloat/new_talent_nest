import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutLanguagesInputObjectSchema } from './UserUpdateWithoutLanguagesInput.schema';
import { UserUncheckedUpdateWithoutLanguagesInputObjectSchema } from './UserUncheckedUpdateWithoutLanguagesInput.schema';
import { UserCreateWithoutLanguagesInputObjectSchema } from './UserCreateWithoutLanguagesInput.schema';
import { UserUncheckedCreateWithoutLanguagesInputObjectSchema } from './UserUncheckedCreateWithoutLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutLanguagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutLanguagesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutLanguagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLanguagesInputObjectSchema)])
}).strict();
export const UserUpsertWithWhereUniqueWithoutLanguagesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutLanguagesInput>;
export const UserUpsertWithWhereUniqueWithoutLanguagesInputObjectZodSchema = makeSchema();
