import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateNestedManyWithoutUserInputObjectSchema } from './JobApplicationCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  username: z.string().nullish(),
  password: z.string().nullish(),
  JobApplication: z.lazy(() => JobApplicationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = makeSchema();
export const UserCreateWithoutSessionsInputObjectZodSchema = makeSchema();
