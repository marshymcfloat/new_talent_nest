import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  identifier: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  expires: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
export const VerificationTokenWhereInputObjectSchema: z.ZodType<Prisma.VerificationTokenWhereInput> = makeSchema();
export const VerificationTokenWhereInputObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type VerificationTokenWhereInput = {
  AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[];
  OR?: VerificationTokenWhereInput[];
  NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[];
  identifier?: z.infer<typeof StringFilterObjectSchema> | string;
  token?: z.infer<typeof StringFilterObjectSchema> | string;
  expires?: z.infer<typeof DateTimeFilterObjectSchema> | Date;
};
(VerificationTokenWhereInputObjectZodSchema satisfies z.ZodType<VerificationTokenWhereInput>);
