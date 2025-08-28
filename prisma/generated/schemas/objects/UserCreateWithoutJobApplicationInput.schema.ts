import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeCreateNestedManyWithoutUserInputObjectSchema } from './ResumeCreateNestedManyWithoutUserInput.schema';
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
  resumes: z.lazy(() => ResumeCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutJobApplicationInput>;
export const UserCreateWithoutJobApplicationInputObjectZodSchema = makeSchema();
