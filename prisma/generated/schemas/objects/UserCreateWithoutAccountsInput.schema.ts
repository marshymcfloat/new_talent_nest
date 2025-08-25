import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateresumesInputObjectSchema } from './UserCreateresumesInput.schema';
import { JobApplicationCreateNestedManyWithoutUserInputObjectSchema } from './JobApplicationCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  username: z.string().nullish(),
  password: z.string().nullish(),
  resumes: z.union([z.lazy(() => UserCreateresumesInputObjectSchema), z.string().array()]).optional(),
  JobApplication: z.lazy(() => JobApplicationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutAccountsInput>;
export const UserCreateWithoutAccountsInputObjectZodSchema = makeSchema();
