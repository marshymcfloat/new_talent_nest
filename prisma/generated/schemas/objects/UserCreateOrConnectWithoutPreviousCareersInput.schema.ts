import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPreviousCareersInputObjectSchema } from './UserCreateWithoutPreviousCareersInput.schema';
import { UserUncheckedCreateWithoutPreviousCareersInputObjectSchema } from './UserUncheckedCreateWithoutPreviousCareersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPreviousCareersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPreviousCareersInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPreviousCareersInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPreviousCareersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPreviousCareersInput>;
export const UserCreateOrConnectWithoutPreviousCareersInputObjectZodSchema = makeSchema();
