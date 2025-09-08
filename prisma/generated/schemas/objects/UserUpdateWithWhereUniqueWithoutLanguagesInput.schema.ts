import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutLanguagesInputObjectSchema } from './UserUpdateWithoutLanguagesInput.schema';
import { UserUncheckedUpdateWithoutLanguagesInputObjectSchema } from './UserUncheckedUpdateWithoutLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutLanguagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutLanguagesInputObjectSchema)])
}).strict();
export const UserUpdateWithWhereUniqueWithoutLanguagesInputObjectSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutLanguagesInput>;
export const UserUpdateWithWhereUniqueWithoutLanguagesInputObjectZodSchema = makeSchema();
