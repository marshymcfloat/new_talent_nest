import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sessionToken: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  expires: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
export const SessionScalarWhereInputObjectSchema: z.ZodType<Prisma.SessionScalarWhereInput> = makeSchema();
export const SessionScalarWhereInputObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type SessionScalarWhereInput = {
  AND?: SessionScalarWhereInput | SessionScalarWhereInput[];
  OR?: SessionScalarWhereInput[];
  NOT?: SessionScalarWhereInput | SessionScalarWhereInput[];
  id?: z.infer<typeof StringFilterObjectSchema> | string;
  sessionToken?: z.infer<typeof StringFilterObjectSchema> | string;
  userId?: z.infer<typeof StringFilterObjectSchema> | string;
  expires?: z.infer<typeof DateTimeFilterObjectSchema> | Date;
};
(SessionScalarWhereInputObjectZodSchema satisfies z.ZodType<SessionScalarWhereInput>);
