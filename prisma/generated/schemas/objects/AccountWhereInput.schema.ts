import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  provider: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  providerAccountId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  refresh_token: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  access_token: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  expires_at: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).nullish(),
  token_type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  scope: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  id_token: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  session_state: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const AccountWhereInputObjectSchema: z.ZodType<Prisma.AccountWhereInput> = makeSchema();
export const AccountWhereInputObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type AccountWhereInput = {
  AND?: AccountWhereInput | AccountWhereInput[];
  OR?: AccountWhereInput[];
  NOT?: AccountWhereInput | AccountWhereInput[];
  id?: z.infer<typeof StringFilterObjectSchema> | string;
  userId?: z.infer<typeof StringFilterObjectSchema> | string;
  type?: z.infer<typeof StringFilterObjectSchema> | string;
  provider?: z.infer<typeof StringFilterObjectSchema> | string;
  providerAccountId?: z.infer<typeof StringFilterObjectSchema> | string;
  refresh_token?: z.infer<typeof StringNullableFilterObjectSchema> | string;
  access_token?: z.infer<typeof StringNullableFilterObjectSchema> | string;
  expires_at?: z.infer<typeof IntNullableFilterObjectSchema> | number;
  token_type?: z.infer<typeof StringNullableFilterObjectSchema> | string;
  scope?: z.infer<typeof StringNullableFilterObjectSchema> | string;
  id_token?: z.infer<typeof StringNullableFilterObjectSchema> | string;
  session_state?: z.infer<typeof StringNullableFilterObjectSchema> | string;
  user?: z.infer<typeof UserScalarRelationFilterObjectSchema> | z.infer<typeof UserWhereInputObjectSchema>;
};
(AccountWhereInputObjectZodSchema satisfies z.ZodType<AccountWhereInput>);
