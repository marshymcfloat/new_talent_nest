import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutResumesInputObjectSchema } from './UserCreateWithoutResumesInput.schema';
import { UserUncheckedCreateWithoutResumesInputObjectSchema } from './UserUncheckedCreateWithoutResumesInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutResumesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutResumesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutResumesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutResumesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutResumesInput>;
export const UserCreateOrConnectWithoutResumesInputObjectZodSchema = makeSchema();
