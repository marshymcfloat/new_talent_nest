import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionWhereUniqueInputObjectSchema } from './EmployerQuestionWhereUniqueInput.schema';
import { EmployerQuestionCreateWithoutAnswersInputObjectSchema } from './EmployerQuestionCreateWithoutAnswersInput.schema';
import { EmployerQuestionUncheckedCreateWithoutAnswersInputObjectSchema } from './EmployerQuestionUncheckedCreateWithoutAnswersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EmployerQuestionCreateWithoutAnswersInputObjectSchema), z.lazy(() => EmployerQuestionUncheckedCreateWithoutAnswersInputObjectSchema)])
}).strict();
export const EmployerQuestionCreateOrConnectWithoutAnswersInputObjectSchema: z.ZodType<Prisma.EmployerQuestionCreateOrConnectWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionCreateOrConnectWithoutAnswersInput>;
export const EmployerQuestionCreateOrConnectWithoutAnswersInputObjectZodSchema = makeSchema();
