import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutJobApplicationInputObjectSchema } from './UserCreateWithoutJobApplicationInput.schema';
import { UserUncheckedCreateWithoutJobApplicationInputObjectSchema } from './UserUncheckedCreateWithoutJobApplicationInput.schema';
import { UserCreateOrConnectWithoutJobApplicationInputObjectSchema } from './UserCreateOrConnectWithoutJobApplicationInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutJobApplicationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutJobApplicationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutJobApplicationInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutJobApplicationInput> = makeSchema();
export const UserCreateNestedOneWithoutJobApplicationInputObjectZodSchema = makeSchema();
