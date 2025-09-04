import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberCreateManyUserInputObjectSchema } from './CompanyMemberCreateManyUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  data: z.union([z.lazy(() => CompanyMemberCreateManyUserInputObjectSchema), z.lazy(() => CompanyMemberCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CompanyMemberCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.CompanyMemberCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberCreateManyUserInputEnvelope>;
export const CompanyMemberCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
