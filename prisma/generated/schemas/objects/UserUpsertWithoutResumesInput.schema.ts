import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutResumesInputObjectSchema } from './UserUpdateWithoutResumesInput.schema';
import { UserUncheckedUpdateWithoutResumesInputObjectSchema } from './UserUncheckedUpdateWithoutResumesInput.schema';
import { UserCreateWithoutResumesInputObjectSchema } from './UserCreateWithoutResumesInput.schema';
import { UserUncheckedCreateWithoutResumesInputObjectSchema } from './UserUncheckedCreateWithoutResumesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutResumesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutResumesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutResumesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutResumesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutResumesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutResumesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutResumesInput>;
export const UserUpsertWithoutResumesInputObjectZodSchema = makeSchema();
