import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberCreateWithoutUserInputObjectSchema } from './CompanyMemberCreateWithoutUserInput.schema';
import { CompanyMemberUncheckedCreateWithoutUserInputObjectSchema } from './CompanyMemberUncheckedCreateWithoutUserInput.schema';
import { CompanyMemberCreateOrConnectWithoutUserInputObjectSchema } from './CompanyMemberCreateOrConnectWithoutUserInput.schema';
import { CompanyMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './CompanyMemberUpsertWithWhereUniqueWithoutUserInput.schema';
import { CompanyMemberCreateManyUserInputEnvelopeObjectSchema } from './CompanyMemberCreateManyUserInputEnvelope.schema';
import { CompanyMemberWhereUniqueInputObjectSchema } from './CompanyMemberWhereUniqueInput.schema';
import { CompanyMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './CompanyMemberUpdateWithWhereUniqueWithoutUserInput.schema';
import { CompanyMemberUpdateManyWithWhereWithoutUserInputObjectSchema } from './CompanyMemberUpdateManyWithWhereWithoutUserInput.schema';
import { CompanyMemberScalarWhereInputObjectSchema } from './CompanyMemberScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyMemberCreateWithoutUserInputObjectSchema), z.lazy(() => CompanyMemberCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CompanyMemberUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CompanyMemberUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CompanyMemberCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CompanyMemberCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CompanyMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CompanyMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CompanyMemberCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema), z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema), z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema), z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema), z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CompanyMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CompanyMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CompanyMemberUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => CompanyMemberUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CompanyMemberScalarWhereInputObjectSchema), z.lazy(() => CompanyMemberScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CompanyMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.CompanyMemberUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUncheckedUpdateManyWithoutUserNestedInput>;
export const CompanyMemberUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
