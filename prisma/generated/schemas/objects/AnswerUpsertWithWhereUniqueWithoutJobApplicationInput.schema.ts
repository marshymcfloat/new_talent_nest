import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithoutJobApplicationInputObjectSchema } from './AnswerUpdateWithoutJobApplicationInput.schema';
import { AnswerUncheckedUpdateWithoutJobApplicationInputObjectSchema } from './AnswerUncheckedUpdateWithoutJobApplicationInput.schema';
import { AnswerCreateWithoutJobApplicationInputObjectSchema } from './AnswerCreateWithoutJobApplicationInput.schema';
import { AnswerUncheckedCreateWithoutJobApplicationInputObjectSchema } from './AnswerUncheckedCreateWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AnswerUpdateWithoutJobApplicationInputObjectSchema), z.lazy(() => AnswerUncheckedUpdateWithoutJobApplicationInputObjectSchema)]),
  create: z.union([z.lazy(() => AnswerCreateWithoutJobApplicationInputObjectSchema), z.lazy(() => AnswerUncheckedCreateWithoutJobApplicationInputObjectSchema)])
}).strict();
export const AnswerUpsertWithWhereUniqueWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.AnswerUpsertWithWhereUniqueWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUpsertWithWhereUniqueWithoutJobApplicationInput>;
export const AnswerUpsertWithWhereUniqueWithoutJobApplicationInputObjectZodSchema = makeSchema();
