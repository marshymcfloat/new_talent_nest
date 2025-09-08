import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerCreateWithoutQuestionInputObjectSchema } from './AnswerCreateWithoutQuestionInput.schema';
import { AnswerUncheckedCreateWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema), z.lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema)])
}).strict();
export const AnswerCreateOrConnectWithoutQuestionInputObjectSchema: z.ZodType<Prisma.AnswerCreateOrConnectWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerCreateOrConnectWithoutQuestionInput>;
export const AnswerCreateOrConnectWithoutQuestionInputObjectZodSchema = makeSchema();
