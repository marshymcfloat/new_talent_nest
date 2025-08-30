import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutLanguagesInputObjectSchema } from './UserCreateWithoutLanguagesInput.schema';
import { UserUncheckedCreateWithoutLanguagesInputObjectSchema } from './UserUncheckedCreateWithoutLanguagesInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutLanguagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLanguagesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutLanguagesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutLanguagesInput>;
export const UserCreateOrConnectWithoutLanguagesInputObjectZodSchema = makeSchema();
