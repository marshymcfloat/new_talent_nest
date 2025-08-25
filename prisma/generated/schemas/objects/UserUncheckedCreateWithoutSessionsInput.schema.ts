import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateresumesInputObjectSchema } from './UserCreateresumesInput.schema';
import { JobApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './JobApplicationUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  username: z.string().nullish(),
  password: z.string().nullish(),
  resumes: z.union([z.lazy(() => UserCreateresumesInputObjectSchema), z.string().array()]).optional(),
  JobApplication: z.lazy(() => JobApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput>;
export const UserUncheckedCreateWithoutSessionsInputObjectZodSchema = makeSchema();
