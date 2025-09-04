import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCompaniesInputObjectSchema } from './UserCreateWithoutCompaniesInput.schema';
import { UserUncheckedCreateWithoutCompaniesInputObjectSchema } from './UserUncheckedCreateWithoutCompaniesInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCompaniesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCompaniesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCompaniesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCompaniesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutCompaniesInput>;
export const UserCreateOrConnectWithoutCompaniesInputObjectZodSchema = makeSchema();
