import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutJobApplicationInputObjectSchema } from './UserUpdateWithoutJobApplicationInput.schema';
import { UserUncheckedUpdateWithoutJobApplicationInputObjectSchema } from './UserUncheckedUpdateWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutJobApplicationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutJobApplicationInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutJobApplicationInput>;
export const UserUpdateToOneWithWhereWithoutJobApplicationInputObjectZodSchema = makeSchema();
