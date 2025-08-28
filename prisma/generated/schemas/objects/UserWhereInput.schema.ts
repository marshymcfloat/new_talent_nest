import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { ResumeListRelationFilterObjectSchema } from './ResumeListRelationFilter.schema';
import { JobApplicationListRelationFilterObjectSchema } from './JobApplicationListRelationFilter.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  emailVerified: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  image: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  username: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  password: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  resumes: z.lazy(() => ResumeListRelationFilterObjectSchema).optional(),
  JobApplication: z.lazy(() => JobApplicationListRelationFilterObjectSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = makeSchema();
