import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberCreateWithoutUserInputObjectSchema } from './CompanyMemberCreateWithoutUserInput.schema';
import { CompanyMemberUncheckedCreateWithoutUserInputObjectSchema } from './CompanyMemberUncheckedCreateWithoutUserInput.schema';
import { CompanyMemberCreateOrConnectWithoutUserInputObjectSchema } from './CompanyMemberCreateOrConnectWithoutUserInput.schema';
import { CompanyMemberCreateManyUserInputEnvelopeObjectSchema } from './CompanyMemberCreateManyUserInputEnvelope.schema';
import { CompanyMemberWhereUniqueInputObjectSchema } from './CompanyMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyMemberCreateWithoutUserInputObjectSchema), z.lazy(() => CompanyMemberCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CompanyMemberUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CompanyMemberUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CompanyMemberCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CompanyMemberCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CompanyMemberCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema), z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CompanyMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.CompanyMemberUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUncheckedCreateNestedManyWithoutUserInput>;
export const CompanyMemberUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
