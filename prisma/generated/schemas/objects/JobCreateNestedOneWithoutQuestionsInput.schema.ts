import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCreateWithoutQuestionsInputObjectSchema } from './JobCreateWithoutQuestionsInput.schema';
import { JobUncheckedCreateWithoutQuestionsInputObjectSchema } from './JobUncheckedCreateWithoutQuestionsInput.schema';
import { JobCreateOrConnectWithoutQuestionsInputObjectSchema } from './JobCreateOrConnectWithoutQuestionsInput.schema';
import { JobWhereUniqueInputObjectSchema } from './JobWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => JobCreateWithoutQuestionsInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => JobCreateOrConnectWithoutQuestionsInputObjectSchema).optional(),
  connect: z.lazy(() => JobWhereUniqueInputObjectSchema).optional()
}).strict();
export const JobCreateNestedOneWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.JobCreateNestedOneWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.JobCreateNestedOneWithoutQuestionsInput>;
export const JobCreateNestedOneWithoutQuestionsInputObjectZodSchema = makeSchema();
