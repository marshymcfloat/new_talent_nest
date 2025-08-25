import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateresumesInputObjectSchema } from './UserCreateresumesInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  username: z.string().nullish(),
  password: z.string().nullish(),
  resumes: z.union([z.lazy(() => UserCreateresumesInputObjectSchema), z.string().array()]).optional()
}).strict();
export const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyInput>;
export const UserCreateManyInputObjectZodSchema = makeSchema();
