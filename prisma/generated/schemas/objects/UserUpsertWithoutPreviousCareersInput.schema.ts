import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutPreviousCareersInputObjectSchema } from './UserUpdateWithoutPreviousCareersInput.schema';
import { UserUncheckedUpdateWithoutPreviousCareersInputObjectSchema } from './UserUncheckedUpdateWithoutPreviousCareersInput.schema';
import { UserCreateWithoutPreviousCareersInputObjectSchema } from './UserCreateWithoutPreviousCareersInput.schema';
import { UserUncheckedCreateWithoutPreviousCareersInputObjectSchema } from './UserUncheckedCreateWithoutPreviousCareersInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPreviousCareersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPreviousCareersInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPreviousCareersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPreviousCareersInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPreviousCareersInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPreviousCareersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPreviousCareersInput>;
export const UserUpsertWithoutPreviousCareersInputObjectZodSchema = makeSchema();
