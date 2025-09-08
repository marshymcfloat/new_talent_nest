import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutLanguagesInputObjectSchema } from './UserUncheckedUpdateManyWithoutLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutLanguagesInputObjectSchema)])
}).strict();
export const UserUpdateManyWithWhereWithoutLanguagesInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateManyWithWhereWithoutLanguagesInput>;
export const UserUpdateManyWithWhereWithoutLanguagesInputObjectZodSchema = makeSchema();
