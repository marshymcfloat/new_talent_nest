import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutPreviousCareersInputObjectSchema } from './UserCreateWithoutPreviousCareersInput.schema';
import { UserUncheckedCreateWithoutPreviousCareersInputObjectSchema } from './UserUncheckedCreateWithoutPreviousCareersInput.schema';
import { UserCreateOrConnectWithoutPreviousCareersInputObjectSchema } from './UserCreateOrConnectWithoutPreviousCareersInput.schema';
import { UserUpsertWithoutPreviousCareersInputObjectSchema } from './UserUpsertWithoutPreviousCareersInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPreviousCareersInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPreviousCareersInput.schema';
import { UserUpdateWithoutPreviousCareersInputObjectSchema } from './UserUpdateWithoutPreviousCareersInput.schema';
import { UserUncheckedUpdateWithoutPreviousCareersInputObjectSchema } from './UserUncheckedUpdateWithoutPreviousCareersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPreviousCareersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPreviousCareersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPreviousCareersInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPreviousCareersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPreviousCareersInputObjectSchema), z.lazy(() => UserUpdateWithoutPreviousCareersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPreviousCareersInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPreviousCareersNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPreviousCareersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPreviousCareersNestedInput>;
export const UserUpdateOneRequiredWithoutPreviousCareersNestedInputObjectZodSchema = makeSchema();
