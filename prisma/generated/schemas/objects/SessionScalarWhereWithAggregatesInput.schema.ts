import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  sessionToken: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  expires: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional()
}).strict();
export const SessionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = makeSchema();
export const SessionScalarWhereWithAggregatesInputObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type SessionScalarWhereWithAggregatesInput = {
  AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[];
  OR?: SessionScalarWhereWithAggregatesInput[];
  NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[];
  id?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  sessionToken?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  userId?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  expires?: z.infer<typeof DateTimeWithAggregatesFilterObjectSchema> | Date;
};
(SessionScalarWhereWithAggregatesInputObjectZodSchema satisfies z.ZodType<SessionScalarWhereWithAggregatesInput>);
