import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutResumesInputObjectSchema } from './UserCreateWithoutResumesInput.schema';
import { UserUncheckedCreateWithoutResumesInputObjectSchema } from './UserUncheckedCreateWithoutResumesInput.schema';
import { UserCreateOrConnectWithoutResumesInputObjectSchema } from './UserCreateOrConnectWithoutResumesInput.schema';
import { UserUpsertWithoutResumesInputObjectSchema } from './UserUpsertWithoutResumesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutResumesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutResumesInput.schema';
import { UserUpdateWithoutResumesInputObjectSchema } from './UserUpdateWithoutResumesInput.schema';
import { UserUncheckedUpdateWithoutResumesInputObjectSchema } from './UserUncheckedUpdateWithoutResumesInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutResumesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutResumesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutResumesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutResumesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutResumesInputObjectSchema), z.lazy(() => UserUpdateWithoutResumesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutResumesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutResumesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutResumesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutResumesNestedInput>;
export const UserUpdateOneRequiredWithoutResumesNestedInputObjectZodSchema = makeSchema();
