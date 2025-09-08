import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutCompaniesInputObjectSchema } from './UserCreateWithoutCompaniesInput.schema';
import { UserUncheckedCreateWithoutCompaniesInputObjectSchema } from './UserUncheckedCreateWithoutCompaniesInput.schema';
import { UserCreateOrConnectWithoutCompaniesInputObjectSchema } from './UserCreateOrConnectWithoutCompaniesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCompaniesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCompaniesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCompaniesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCompaniesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCompaniesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutCompaniesInput>;
export const UserCreateNestedOneWithoutCompaniesInputObjectZodSchema = makeSchema();
