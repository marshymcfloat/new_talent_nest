import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  email: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  emailVerified: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.date()]).nullish(),
  image: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  username: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  password: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish()
}).strict();
export const UserScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = makeSchema();
export const UserScalarWhereWithAggregatesInputObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type UserScalarWhereWithAggregatesInput = {
  AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
  OR?: UserScalarWhereWithAggregatesInput[];
  NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
  id?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  name?: z.infer<typeof StringNullableWithAggregatesFilterObjectSchema> | string;
  email?: z.infer<typeof StringNullableWithAggregatesFilterObjectSchema> | string;
  emailVerified?: z.infer<typeof DateTimeNullableWithAggregatesFilterObjectSchema> | Date;
  image?: z.infer<typeof StringNullableWithAggregatesFilterObjectSchema> | string;
  username?: z.infer<typeof StringNullableWithAggregatesFilterObjectSchema> | string;
  password?: z.infer<typeof StringNullableWithAggregatesFilterObjectSchema> | string;
};
(UserScalarWhereWithAggregatesInputObjectZodSchema satisfies z.ZodType<UserScalarWhereWithAggregatesInput>);
