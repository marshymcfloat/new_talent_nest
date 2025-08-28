import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerCreateWithoutJobApplicationInputObjectSchema } from './AnswerCreateWithoutJobApplicationInput.schema';
import { AnswerUncheckedCreateWithoutJobApplicationInputObjectSchema } from './AnswerUncheckedCreateWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AnswerCreateWithoutJobApplicationInputObjectSchema), z.lazy(() => AnswerUncheckedCreateWithoutJobApplicationInputObjectSchema)])
}).strict();
export const AnswerCreateOrConnectWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.AnswerCreateOrConnectWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerCreateOrConnectWithoutJobApplicationInput>;
export const AnswerCreateOrConnectWithoutJobApplicationInputObjectZodSchema = makeSchema();
