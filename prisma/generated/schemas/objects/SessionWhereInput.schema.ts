import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sessionToken: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  expires: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const SessionWhereInputObjectSchema: z.ZodType<Prisma.SessionWhereInput> = makeSchema();
export const SessionWhereInputObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type SessionWhereInput = {
  AND?: SessionWhereInput | SessionWhereInput[];
  OR?: SessionWhereInput[];
  NOT?: SessionWhereInput | SessionWhereInput[];
  id?: z.infer<typeof StringFilterObjectSchema> | string;
  sessionToken?: z.infer<typeof StringFilterObjectSchema> | string;
  userId?: z.infer<typeof StringFilterObjectSchema> | string;
  expires?: z.infer<typeof DateTimeFilterObjectSchema> | Date;
  user?: z.infer<typeof UserScalarRelationFilterObjectSchema> | z.infer<typeof UserWhereInputObjectSchema>;
};
(SessionWhereInputObjectZodSchema satisfies z.ZodType<SessionWhereInput>);
