import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  provider: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  providerAccountId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  refresh_token: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  access_token: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  expires_at: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).nullish(),
  token_type: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  scope: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  id_token: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  session_state: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish()
}).strict();
export const AccountScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = makeSchema();
export const AccountScalarWhereWithAggregatesInputObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type AccountScalarWhereWithAggregatesInput = {
  AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[];
  OR?: AccountScalarWhereWithAggregatesInput[];
  NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[];
  id?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  userId?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  type?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  provider?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  providerAccountId?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  refresh_token?: z.infer<typeof StringNullableWithAggregatesFilterObjectSchema> | string;
  access_token?: z.infer<typeof StringNullableWithAggregatesFilterObjectSchema> | string;
  expires_at?: z.infer<typeof IntNullableWithAggregatesFilterObjectSchema> | number;
  token_type?: z.infer<typeof StringNullableWithAggregatesFilterObjectSchema> | string;
  scope?: z.infer<typeof StringNullableWithAggregatesFilterObjectSchema> | string;
  id_token?: z.infer<typeof StringNullableWithAggregatesFilterObjectSchema> | string;
  session_state?: z.infer<typeof StringNullableWithAggregatesFilterObjectSchema> | string;
};
(AccountScalarWhereWithAggregatesInputObjectZodSchema satisfies z.ZodType<AccountScalarWhereWithAggregatesInput>);
