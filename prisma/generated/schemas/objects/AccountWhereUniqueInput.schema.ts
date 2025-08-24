import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema } from './AccountProviderProviderAccountIdCompoundUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string(),
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema)
}).strict();
export const AccountWhereUniqueInputObjectSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = makeSchema();
export const AccountWhereUniqueInputObjectZodSchema = makeSchema();
