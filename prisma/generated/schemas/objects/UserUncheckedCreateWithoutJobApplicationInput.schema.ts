import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ResumeUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  username: z.string().nullish(),
  password: z.string().nullish(),
  resumes: z.lazy(() => ResumeUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutJobApplicationInput>;
export const UserUncheckedCreateWithoutJobApplicationInputObjectZodSchema = makeSchema();
