import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutPreviousCareersInputObjectSchema } from './UserCreateWithoutPreviousCareersInput.schema';
import { UserUncheckedCreateWithoutPreviousCareersInputObjectSchema } from './UserUncheckedCreateWithoutPreviousCareersInput.schema';
import { UserCreateOrConnectWithoutPreviousCareersInputObjectSchema } from './UserCreateOrConnectWithoutPreviousCareersInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPreviousCareersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPreviousCareersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPreviousCareersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPreviousCareersInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPreviousCareersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutPreviousCareersInput>;
export const UserCreateNestedOneWithoutPreviousCareersInputObjectZodSchema = makeSchema();
