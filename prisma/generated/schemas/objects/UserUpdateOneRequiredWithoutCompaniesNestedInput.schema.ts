import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutCompaniesInputObjectSchema } from './UserCreateWithoutCompaniesInput.schema';
import { UserUncheckedCreateWithoutCompaniesInputObjectSchema } from './UserUncheckedCreateWithoutCompaniesInput.schema';
import { UserCreateOrConnectWithoutCompaniesInputObjectSchema } from './UserCreateOrConnectWithoutCompaniesInput.schema';
import { UserUpsertWithoutCompaniesInputObjectSchema } from './UserUpsertWithoutCompaniesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCompaniesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCompaniesInput.schema';
import { UserUpdateWithoutCompaniesInputObjectSchema } from './UserUpdateWithoutCompaniesInput.schema';
import { UserUncheckedUpdateWithoutCompaniesInputObjectSchema } from './UserUncheckedUpdateWithoutCompaniesInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCompaniesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCompaniesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCompaniesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCompaniesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCompaniesInputObjectSchema), z.lazy(() => UserUpdateWithoutCompaniesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCompaniesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutCompaniesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCompaniesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutCompaniesNestedInput>;
export const UserUpdateOneRequiredWithoutCompaniesNestedInputObjectZodSchema = makeSchema();
