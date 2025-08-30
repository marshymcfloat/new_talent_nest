import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPreviousCareersInputObjectSchema } from './UserUpdateWithoutPreviousCareersInput.schema';
import { UserUncheckedUpdateWithoutPreviousCareersInputObjectSchema } from './UserUncheckedUpdateWithoutPreviousCareersInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPreviousCareersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPreviousCareersInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPreviousCareersInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPreviousCareersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPreviousCareersInput>;
export const UserUpdateToOneWithWhereWithoutPreviousCareersInputObjectZodSchema = makeSchema();
