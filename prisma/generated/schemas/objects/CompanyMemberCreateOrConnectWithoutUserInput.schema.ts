import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberWhereUniqueInputObjectSchema } from './CompanyMemberWhereUniqueInput.schema';
import { CompanyMemberCreateWithoutUserInputObjectSchema } from './CompanyMemberCreateWithoutUserInput.schema';
import { CompanyMemberUncheckedCreateWithoutUserInputObjectSchema } from './CompanyMemberUncheckedCreateWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CompanyMemberCreateWithoutUserInputObjectSchema), z.lazy(() => CompanyMemberUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CompanyMemberCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.CompanyMemberCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberCreateOrConnectWithoutUserInput>;
export const CompanyMemberCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
