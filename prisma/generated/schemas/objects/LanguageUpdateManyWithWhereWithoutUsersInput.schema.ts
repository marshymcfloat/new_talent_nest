import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LanguageScalarWhereInputObjectSchema } from './LanguageScalarWhereInput.schema';
import { LanguageUpdateManyMutationInputObjectSchema } from './LanguageUpdateManyMutationInput.schema';
import { LanguageUncheckedUpdateManyWithoutUsersInputObjectSchema } from './LanguageUncheckedUpdateManyWithoutUsersInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => LanguageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => LanguageUpdateManyMutationInputObjectSchema), z.lazy(() => LanguageUncheckedUpdateManyWithoutUsersInputObjectSchema)])
}).strict();
export const LanguageUpdateManyWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageUpdateManyWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateManyWithWhereWithoutUsersInput>;
export const LanguageUpdateManyWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
