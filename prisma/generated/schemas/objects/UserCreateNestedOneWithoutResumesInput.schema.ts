import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutResumesInputObjectSchema } from './UserCreateWithoutResumesInput.schema';
import { UserUncheckedCreateWithoutResumesInputObjectSchema } from './UserUncheckedCreateWithoutResumesInput.schema';
import { UserCreateOrConnectWithoutResumesInputObjectSchema } from './UserCreateOrConnectWithoutResumesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutResumesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutResumesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutResumesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutResumesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutResumesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutResumesInput>;
export const UserCreateNestedOneWithoutResumesInputObjectZodSchema = makeSchema();
