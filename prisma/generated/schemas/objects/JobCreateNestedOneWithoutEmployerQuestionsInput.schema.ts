import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCreateWithoutEmployerQuestionsInputObjectSchema } from './JobCreateWithoutEmployerQuestionsInput.schema';
import { JobUncheckedCreateWithoutEmployerQuestionsInputObjectSchema } from './JobUncheckedCreateWithoutEmployerQuestionsInput.schema';
import { JobCreateOrConnectWithoutEmployerQuestionsInputObjectSchema } from './JobCreateOrConnectWithoutEmployerQuestionsInput.schema';
import { JobWhereUniqueInputObjectSchema } from './JobWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => JobCreateWithoutEmployerQuestionsInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutEmployerQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => JobCreateOrConnectWithoutEmployerQuestionsInputObjectSchema).optional(),
  connect: z.lazy(() => JobWhereUniqueInputObjectSchema).optional()
}).strict();
export const JobCreateNestedOneWithoutEmployerQuestionsInputObjectSchema: z.ZodType<Prisma.JobCreateNestedOneWithoutEmployerQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.JobCreateNestedOneWithoutEmployerQuestionsInput>;
export const JobCreateNestedOneWithoutEmployerQuestionsInputObjectZodSchema = makeSchema();
