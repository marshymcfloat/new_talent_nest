import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerScalarWhereInputObjectSchema } from './AnswerScalarWhereInput.schema';
import { AnswerUpdateManyMutationInputObjectSchema } from './AnswerUpdateManyMutationInput.schema';
import { AnswerUncheckedUpdateManyWithoutQuestionInputObjectSchema } from './AnswerUncheckedUpdateManyWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnswerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AnswerUpdateManyMutationInputObjectSchema), z.lazy(() => AnswerUncheckedUpdateManyWithoutQuestionInputObjectSchema)])
}).strict();
export const AnswerUpdateManyWithWhereWithoutQuestionInputObjectSchema: z.ZodType<Prisma.AnswerUpdateManyWithWhereWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUpdateManyWithWhereWithoutQuestionInput>;
export const AnswerUpdateManyWithWhereWithoutQuestionInputObjectZodSchema = makeSchema();
