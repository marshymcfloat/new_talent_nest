import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutEducationInputObjectSchema } from './UserCreateWithoutEducationInput.schema';
import { UserUncheckedCreateWithoutEducationInputObjectSchema } from './UserUncheckedCreateWithoutEducationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutEducationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutEducationInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutEducationInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutEducationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutEducationInput>;
export const UserCreateOrConnectWithoutEducationInputObjectZodSchema = makeSchema();
