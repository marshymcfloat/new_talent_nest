import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerCreateWithoutJobApplicationInputObjectSchema } from './AnswerCreateWithoutJobApplicationInput.schema';
import { AnswerUncheckedCreateWithoutJobApplicationInputObjectSchema } from './AnswerUncheckedCreateWithoutJobApplicationInput.schema';
import { AnswerCreateOrConnectWithoutJobApplicationInputObjectSchema } from './AnswerCreateOrConnectWithoutJobApplicationInput.schema';
import { AnswerUpsertWithWhereUniqueWithoutJobApplicationInputObjectSchema } from './AnswerUpsertWithWhereUniqueWithoutJobApplicationInput.schema';
import { AnswerCreateManyJobApplicationInputEnvelopeObjectSchema } from './AnswerCreateManyJobApplicationInputEnvelope.schema';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithWhereUniqueWithoutJobApplicationInputObjectSchema } from './AnswerUpdateWithWhereUniqueWithoutJobApplicationInput.schema';
import { AnswerUpdateManyWithWhereWithoutJobApplicationInputObjectSchema } from './AnswerUpdateManyWithWhereWithoutJobApplicationInput.schema';
import { AnswerScalarWhereInputObjectSchema } from './AnswerScalarWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => AnswerCreateWithoutJobApplicationInputObjectSchema), z.lazy(() => AnswerCreateWithoutJobApplicationInputObjectSchema).array(), z.lazy(() => AnswerUncheckedCreateWithoutJobApplicationInputObjectSchema), z.lazy(() => AnswerUncheckedCreateWithoutJobApplicationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AnswerCreateOrConnectWithoutJobApplicationInputObjectSchema), z.lazy(() => AnswerCreateOrConnectWithoutJobApplicationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AnswerUpsertWithWhereUniqueWithoutJobApplicationInputObjectSchema), z.lazy(() => AnswerUpsertWithWhereUniqueWithoutJobApplicationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AnswerCreateManyJobApplicationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AnswerWhereUniqueInputObjectSchema), z.lazy(() => AnswerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AnswerWhereUniqueInputObjectSchema), z.lazy(() => AnswerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AnswerWhereUniqueInputObjectSchema), z.lazy(() => AnswerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AnswerWhereUniqueInputObjectSchema), z.lazy(() => AnswerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AnswerUpdateWithWhereUniqueWithoutJobApplicationInputObjectSchema), z.lazy(() => AnswerUpdateWithWhereUniqueWithoutJobApplicationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AnswerUpdateManyWithWhereWithoutJobApplicationInputObjectSchema), z.lazy(() => AnswerUpdateManyWithWhereWithoutJobApplicationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AnswerScalarWhereInputObjectSchema), z.lazy(() => AnswerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AnswerUpdateManyWithoutJobApplicationNestedInputObjectSchema: z.ZodType<Prisma.AnswerUpdateManyWithoutJobApplicationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUpdateManyWithoutJobApplicationNestedInput>;
export const AnswerUpdateManyWithoutJobApplicationNestedInputObjectZodSchema = makeSchema();
