import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithoutQuestionInputObjectSchema } from './AnswerUpdateWithoutQuestionInput.schema';
import { AnswerUncheckedUpdateWithoutQuestionInputObjectSchema } from './AnswerUncheckedUpdateWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AnswerUpdateWithoutQuestionInputObjectSchema), z.lazy(() => AnswerUncheckedUpdateWithoutQuestionInputObjectSchema)])
}).strict();
export const AnswerUpdateWithWhereUniqueWithoutQuestionInputObjectSchema: z.ZodType<Prisma.AnswerUpdateWithWhereUniqueWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUpdateWithWhereUniqueWithoutQuestionInput>;
export const AnswerUpdateWithWhereUniqueWithoutQuestionInputObjectZodSchema = makeSchema();
