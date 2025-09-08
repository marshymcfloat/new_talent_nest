import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutCompaniesInputObjectSchema } from './UserUpdateWithoutCompaniesInput.schema';
import { UserUncheckedUpdateWithoutCompaniesInputObjectSchema } from './UserUncheckedUpdateWithoutCompaniesInput.schema';
import { UserCreateWithoutCompaniesInputObjectSchema } from './UserCreateWithoutCompaniesInput.schema';
import { UserUncheckedCreateWithoutCompaniesInputObjectSchema } from './UserUncheckedCreateWithoutCompaniesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCompaniesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCompaniesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCompaniesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCompaniesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCompaniesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCompaniesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutCompaniesInput>;
export const UserUpsertWithoutCompaniesInputObjectZodSchema = makeSchema();
