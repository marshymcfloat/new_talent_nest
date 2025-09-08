import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerCreateWithoutQuestionInputObjectSchema } from './AnswerCreateWithoutQuestionInput.schema';
import { AnswerUncheckedCreateWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateWithoutQuestionInput.schema';
import { AnswerCreateOrConnectWithoutQuestionInputObjectSchema } from './AnswerCreateOrConnectWithoutQuestionInput.schema';
import { AnswerUpsertWithWhereUniqueWithoutQuestionInputObjectSchema } from './AnswerUpsertWithWhereUniqueWithoutQuestionInput.schema';
import { AnswerCreateManyQuestionInputEnvelopeObjectSchema } from './AnswerCreateManyQuestionInputEnvelope.schema';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithWhereUniqueWithoutQuestionInputObjectSchema } from './AnswerUpdateWithWhereUniqueWithoutQuestionInput.schema';
import { AnswerUpdateManyWithWhereWithoutQuestionInputObjectSchema } from './AnswerUpdateManyWithWhereWithoutQuestionInput.schema';
import { AnswerScalarWhereInputObjectSchema } from './AnswerScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema), z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema).array(), z.lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema), z.lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AnswerCreateOrConnectWithoutQuestionInputObjectSchema), z.lazy(() => AnswerCreateOrConnectWithoutQuestionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AnswerUpsertWithWhereUniqueWithoutQuestionInputObjectSchema), z.lazy(() => AnswerUpsertWithWhereUniqueWithoutQuestionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AnswerCreateManyQuestionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AnswerWhereUniqueInputObjectSchema), z.lazy(() => AnswerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AnswerWhereUniqueInputObjectSchema), z.lazy(() => AnswerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AnswerWhereUniqueInputObjectSchema), z.lazy(() => AnswerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AnswerWhereUniqueInputObjectSchema), z.lazy(() => AnswerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AnswerUpdateWithWhereUniqueWithoutQuestionInputObjectSchema), z.lazy(() => AnswerUpdateWithWhereUniqueWithoutQuestionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AnswerUpdateManyWithWhereWithoutQuestionInputObjectSchema), z.lazy(() => AnswerUpdateManyWithWhereWithoutQuestionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AnswerScalarWhereInputObjectSchema), z.lazy(() => AnswerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AnswerUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema: z.ZodType<Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput>;
export const AnswerUncheckedUpdateManyWithoutQuestionNestedInputObjectZodSchema = makeSchema();
