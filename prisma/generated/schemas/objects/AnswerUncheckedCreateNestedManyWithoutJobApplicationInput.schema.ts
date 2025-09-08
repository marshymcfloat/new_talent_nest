import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerCreateWithoutJobApplicationInputObjectSchema } from './AnswerCreateWithoutJobApplicationInput.schema';
import { AnswerUncheckedCreateWithoutJobApplicationInputObjectSchema } from './AnswerUncheckedCreateWithoutJobApplicationInput.schema';
import { AnswerCreateOrConnectWithoutJobApplicationInputObjectSchema } from './AnswerCreateOrConnectWithoutJobApplicationInput.schema';
import { AnswerCreateManyJobApplicationInputEnvelopeObjectSchema } from './AnswerCreateManyJobApplicationInputEnvelope.schema';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AnswerCreateWithoutJobApplicationInputObjectSchema), z.lazy(() => AnswerCreateWithoutJobApplicationInputObjectSchema).array(), z.lazy(() => AnswerUncheckedCreateWithoutJobApplicationInputObjectSchema), z.lazy(() => AnswerUncheckedCreateWithoutJobApplicationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AnswerCreateOrConnectWithoutJobApplicationInputObjectSchema), z.lazy(() => AnswerCreateOrConnectWithoutJobApplicationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AnswerCreateManyJobApplicationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AnswerWhereUniqueInputObjectSchema), z.lazy(() => AnswerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AnswerUncheckedCreateNestedManyWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.AnswerUncheckedCreateNestedManyWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUncheckedCreateNestedManyWithoutJobApplicationInput>;
export const AnswerUncheckedCreateNestedManyWithoutJobApplicationInputObjectZodSchema = makeSchema();
