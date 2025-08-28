import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateNestedManyWithoutUserInputObjectSchema } from './JobApplicationCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  username: z.string().nullish(),
  password: z.string().nullish(),
  JobApplication: z.lazy(() => JobApplicationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutResumesInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutResumesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutResumesInput>;
export const UserCreateWithoutResumesInputObjectZodSchema = makeSchema();
