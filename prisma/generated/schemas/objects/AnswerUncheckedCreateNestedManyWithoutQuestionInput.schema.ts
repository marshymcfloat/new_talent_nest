import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerCreateWithoutQuestionInputObjectSchema } from './AnswerCreateWithoutQuestionInput.schema';
import { AnswerUncheckedCreateWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateWithoutQuestionInput.schema';
import { AnswerCreateOrConnectWithoutQuestionInputObjectSchema } from './AnswerCreateOrConnectWithoutQuestionInput.schema';
import { AnswerCreateManyQuestionInputEnvelopeObjectSchema } from './AnswerCreateManyQuestionInputEnvelope.schema';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema), z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema).array(), z.lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema), z.lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AnswerCreateOrConnectWithoutQuestionInputObjectSchema), z.lazy(() => AnswerCreateOrConnectWithoutQuestionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AnswerCreateManyQuestionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AnswerWhereUniqueInputObjectSchema), z.lazy(() => AnswerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AnswerUncheckedCreateNestedManyWithoutQuestionInputObjectSchema: z.ZodType<Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput>;
export const AnswerUncheckedCreateNestedManyWithoutQuestionInputObjectZodSchema = makeSchema();
