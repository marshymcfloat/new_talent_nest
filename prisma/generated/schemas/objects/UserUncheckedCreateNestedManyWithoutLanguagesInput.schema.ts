import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutLanguagesInputObjectSchema } from './UserCreateWithoutLanguagesInput.schema';
import { UserUncheckedCreateWithoutLanguagesInputObjectSchema } from './UserUncheckedCreateWithoutLanguagesInput.schema';
import { UserCreateOrConnectWithoutLanguagesInputObjectSchema } from './UserCreateOrConnectWithoutLanguagesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutLanguagesInputObjectSchema), z.lazy(() => UserCreateWithoutLanguagesInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutLanguagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLanguagesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutLanguagesInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutLanguagesInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedCreateNestedManyWithoutLanguagesInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutLanguagesInput>;
export const UserUncheckedCreateNestedManyWithoutLanguagesInputObjectZodSchema = makeSchema();
