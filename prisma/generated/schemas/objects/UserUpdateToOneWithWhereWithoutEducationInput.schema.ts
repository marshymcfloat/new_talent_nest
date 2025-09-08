import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutEducationInputObjectSchema } from './UserUpdateWithoutEducationInput.schema';
import { UserUncheckedUpdateWithoutEducationInputObjectSchema } from './UserUncheckedUpdateWithoutEducationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutEducationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutEducationInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutEducationInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutEducationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutEducationInput>;
export const UserUpdateToOneWithWhereWithoutEducationInputObjectZodSchema = makeSchema();
