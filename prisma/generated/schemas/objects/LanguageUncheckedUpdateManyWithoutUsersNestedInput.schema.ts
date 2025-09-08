import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LanguageCreateWithoutUsersInputObjectSchema } from './LanguageCreateWithoutUsersInput.schema';
import { LanguageUncheckedCreateWithoutUsersInputObjectSchema } from './LanguageUncheckedCreateWithoutUsersInput.schema';
import { LanguageCreateOrConnectWithoutUsersInputObjectSchema } from './LanguageCreateOrConnectWithoutUsersInput.schema';
import { LanguageUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './LanguageUpsertWithWhereUniqueWithoutUsersInput.schema';
import { LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema';
import { LanguageUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './LanguageUpdateWithWhereUniqueWithoutUsersInput.schema';
import { LanguageUpdateManyWithWhereWithoutUsersInputObjectSchema } from './LanguageUpdateManyWithWhereWithoutUsersInput.schema';
import { LanguageScalarWhereInputObjectSchema } from './LanguageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LanguageCreateWithoutUsersInputObjectSchema), z.lazy(() => LanguageCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => LanguageUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LanguageCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => LanguageCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LanguageUpsertWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => LanguageUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => LanguageWhereUniqueInputObjectSchema), z.lazy(() => LanguageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LanguageWhereUniqueInputObjectSchema), z.lazy(() => LanguageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LanguageWhereUniqueInputObjectSchema), z.lazy(() => LanguageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LanguageWhereUniqueInputObjectSchema), z.lazy(() => LanguageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => LanguageUpdateWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => LanguageUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LanguageUpdateManyWithWhereWithoutUsersInputObjectSchema), z.lazy(() => LanguageUpdateManyWithWhereWithoutUsersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LanguageScalarWhereInputObjectSchema), z.lazy(() => LanguageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const LanguageUncheckedUpdateManyWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.LanguageUncheckedUpdateManyWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUncheckedUpdateManyWithoutUsersNestedInput>;
export const LanguageUncheckedUpdateManyWithoutUsersNestedInputObjectZodSchema = makeSchema();
