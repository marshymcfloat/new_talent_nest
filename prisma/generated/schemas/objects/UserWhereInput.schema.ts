import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
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
  JobApplication: z.lazy(() => JobApplicationListRelationFilterObjectSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = makeSchema();
export const UserWhereInputObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type UserWhereInput = {
  AND?: UserWhereInput | UserWhereInput[];
  OR?: UserWhereInput[];
  NOT?: UserWhereInput | UserWhereInput[];
  id?: z.infer<typeof StringFilterObjectSchema> | string;
  name?: z.infer<typeof StringNullableFilterObjectSchema> | string;
  email?: z.infer<typeof StringNullableFilterObjectSchema> | string;
  emailVerified?: z.infer<typeof DateTimeNullableFilterObjectSchema> | Date;
  image?: z.infer<typeof StringNullableFilterObjectSchema> | string;
  username?: z.infer<typeof StringNullableFilterObjectSchema> | string;
  password?: z.infer<typeof StringNullableFilterObjectSchema> | string;
  JobApplication?: z.infer<typeof JobApplicationListRelationFilterObjectSchema>;
  accounts?: z.infer<typeof AccountListRelationFilterObjectSchema>;
  sessions?: z.infer<typeof SessionListRelationFilterObjectSchema>;
};
(UserWhereInputObjectZodSchema satisfies z.ZodType<UserWhereInput>);
