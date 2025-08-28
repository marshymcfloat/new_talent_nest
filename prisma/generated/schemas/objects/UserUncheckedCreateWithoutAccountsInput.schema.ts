import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ResumeUncheckedCreateNestedManyWithoutUserInput.schema';
import { JobApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './JobApplicationUncheckedCreateNestedManyWithoutUserInput.schema';
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
  JobApplication: z.lazy(() => JobApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput>;
export const UserUncheckedCreateWithoutAccountsInputObjectZodSchema = makeSchema();
