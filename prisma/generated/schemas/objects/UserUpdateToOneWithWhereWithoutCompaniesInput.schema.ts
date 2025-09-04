import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCompaniesInputObjectSchema } from './UserUpdateWithoutCompaniesInput.schema';
import { UserUncheckedUpdateWithoutCompaniesInputObjectSchema } from './UserUncheckedUpdateWithoutCompaniesInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCompaniesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCompaniesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCompaniesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCompaniesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCompaniesInput>;
export const UserUpdateToOneWithWhereWithoutCompaniesInputObjectZodSchema = makeSchema();
