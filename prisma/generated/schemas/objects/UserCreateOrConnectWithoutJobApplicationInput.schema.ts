import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutJobApplicationInputObjectSchema } from './UserCreateWithoutJobApplicationInput.schema';
import { UserUncheckedCreateWithoutJobApplicationInputObjectSchema } from './UserUncheckedCreateWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutJobApplicationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutJobApplicationInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutJobApplicationInput>;
export const UserCreateOrConnectWithoutJobApplicationInputObjectZodSchema = makeSchema();
