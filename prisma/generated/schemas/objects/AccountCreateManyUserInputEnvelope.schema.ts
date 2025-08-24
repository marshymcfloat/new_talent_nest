import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountCreateManyUserInputObjectSchema } from './AccountCreateManyUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  data: z.union([z.lazy(() => AccountCreateManyUserInputObjectSchema), z.lazy(() => AccountCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AccountCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = makeSchema();
export const AccountCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
