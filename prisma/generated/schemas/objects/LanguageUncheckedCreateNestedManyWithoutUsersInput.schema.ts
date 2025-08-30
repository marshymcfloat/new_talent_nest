import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LanguageCreateWithoutUsersInputObjectSchema } from './LanguageCreateWithoutUsersInput.schema';
import { LanguageUncheckedCreateWithoutUsersInputObjectSchema } from './LanguageUncheckedCreateWithoutUsersInput.schema';
import { LanguageCreateOrConnectWithoutUsersInputObjectSchema } from './LanguageCreateOrConnectWithoutUsersInput.schema';
import { LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => LanguageCreateWithoutUsersInputObjectSchema), z.lazy(() => LanguageCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => LanguageUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LanguageCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => LanguageCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LanguageWhereUniqueInputObjectSchema), z.lazy(() => LanguageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const LanguageUncheckedCreateNestedManyWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageUncheckedCreateNestedManyWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUncheckedCreateNestedManyWithoutUsersInput>;
export const LanguageUncheckedCreateNestedManyWithoutUsersInputObjectZodSchema = makeSchema();
