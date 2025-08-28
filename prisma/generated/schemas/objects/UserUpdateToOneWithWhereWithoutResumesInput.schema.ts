import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutResumesInputObjectSchema } from './UserUpdateWithoutResumesInput.schema';
import { UserUncheckedUpdateWithoutResumesInputObjectSchema } from './UserUncheckedUpdateWithoutResumesInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutResumesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutResumesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutResumesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutResumesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutResumesInput>;
export const UserUpdateToOneWithWhereWithoutResumesInputObjectZodSchema = makeSchema();
