import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerScalarWhereInputObjectSchema } from './AnswerScalarWhereInput.schema';
import { AnswerUpdateManyMutationInputObjectSchema } from './AnswerUpdateManyMutationInput.schema';
import { AnswerUncheckedUpdateManyWithoutJobApplicationInputObjectSchema } from './AnswerUncheckedUpdateManyWithoutJobApplicationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnswerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AnswerUpdateManyMutationInputObjectSchema), z.lazy(() => AnswerUncheckedUpdateManyWithoutJobApplicationInputObjectSchema)])
}).strict();
export const AnswerUpdateManyWithWhereWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.AnswerUpdateManyWithWhereWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUpdateManyWithWhereWithoutJobApplicationInput>;
export const AnswerUpdateManyWithWhereWithoutJobApplicationInputObjectZodSchema = makeSchema();
