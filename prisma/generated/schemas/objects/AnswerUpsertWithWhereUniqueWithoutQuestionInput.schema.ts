import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithoutQuestionInputObjectSchema } from './AnswerUpdateWithoutQuestionInput.schema';
import { AnswerUncheckedUpdateWithoutQuestionInputObjectSchema } from './AnswerUncheckedUpdateWithoutQuestionInput.schema';
import { AnswerCreateWithoutQuestionInputObjectSchema } from './AnswerCreateWithoutQuestionInput.schema';
import { AnswerUncheckedCreateWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AnswerUpdateWithoutQuestionInputObjectSchema), z.lazy(() => AnswerUncheckedUpdateWithoutQuestionInputObjectSchema)]),
  create: z.union([z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema), z.lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema)])
}).strict();
export const AnswerUpsertWithWhereUniqueWithoutQuestionInputObjectSchema: z.ZodType<Prisma.AnswerUpsertWithWhereUniqueWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUpsertWithWhereUniqueWithoutQuestionInput>;
export const AnswerUpsertWithWhereUniqueWithoutQuestionInputObjectZodSchema = makeSchema();
