import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutEducationInputObjectSchema } from './UserCreateWithoutEducationInput.schema';
import { UserUncheckedCreateWithoutEducationInputObjectSchema } from './UserUncheckedCreateWithoutEducationInput.schema';
import { UserCreateOrConnectWithoutEducationInputObjectSchema } from './UserCreateOrConnectWithoutEducationInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutEducationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutEducationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEducationInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutEducationInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutEducationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutEducationInput>;
export const UserCreateNestedOneWithoutEducationInputObjectZodSchema = makeSchema();
