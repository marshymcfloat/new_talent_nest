import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsCreateWithoutJobInputObjectSchema } from './QuestionsOnJobsCreateWithoutJobInput.schema';
import { QuestionsOnJobsUncheckedCreateWithoutJobInputObjectSchema } from './QuestionsOnJobsUncheckedCreateWithoutJobInput.schema';
import { QuestionsOnJobsCreateOrConnectWithoutJobInputObjectSchema } from './QuestionsOnJobsCreateOrConnectWithoutJobInput.schema';
import { QuestionsOnJobsCreateManyJobInputEnvelopeObjectSchema } from './QuestionsOnJobsCreateManyJobInputEnvelope.schema';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './QuestionsOnJobsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuestionsOnJobsCreateWithoutJobInputObjectSchema), z.lazy(() => QuestionsOnJobsCreateWithoutJobInputObjectSchema).array(), z.lazy(() => QuestionsOnJobsUncheckedCreateWithoutJobInputObjectSchema), z.lazy(() => QuestionsOnJobsUncheckedCreateWithoutJobInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QuestionsOnJobsCreateOrConnectWithoutJobInputObjectSchema), z.lazy(() => QuestionsOnJobsCreateOrConnectWithoutJobInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QuestionsOnJobsCreateManyJobInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema), z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const QuestionsOnJobsCreateNestedManyWithoutJobInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsCreateNestedManyWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsCreateNestedManyWithoutJobInput>;
export const QuestionsOnJobsCreateNestedManyWithoutJobInputObjectZodSchema = makeSchema();
