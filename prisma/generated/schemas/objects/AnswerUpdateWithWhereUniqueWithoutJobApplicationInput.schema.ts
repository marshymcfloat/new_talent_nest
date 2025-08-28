import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithoutJobApplicationInputObjectSchema } from './AnswerUpdateWithoutJobApplicationInput.schema';
import { AnswerUncheckedUpdateWithoutJobApplicationInputObjectSchema } from './AnswerUncheckedUpdateWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AnswerUpdateWithoutJobApplicationInputObjectSchema), z.lazy(() => AnswerUncheckedUpdateWithoutJobApplicationInputObjectSchema)])
}).strict();
export const AnswerUpdateWithWhereUniqueWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.AnswerUpdateWithWhereUniqueWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUpdateWithWhereUniqueWithoutJobApplicationInput>;
export const AnswerUpdateWithWhereUniqueWithoutJobApplicationInputObjectZodSchema = makeSchema();
