import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionCreateWithoutAnswersInputObjectSchema } from './EmployerQuestionCreateWithoutAnswersInput.schema';
import { EmployerQuestionUncheckedCreateWithoutAnswersInputObjectSchema } from './EmployerQuestionUncheckedCreateWithoutAnswersInput.schema';
import { EmployerQuestionCreateOrConnectWithoutAnswersInputObjectSchema } from './EmployerQuestionCreateOrConnectWithoutAnswersInput.schema';
import { EmployerQuestionWhereUniqueInputObjectSchema } from './EmployerQuestionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmployerQuestionCreateWithoutAnswersInputObjectSchema), z.lazy(() => EmployerQuestionUncheckedCreateWithoutAnswersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmployerQuestionCreateOrConnectWithoutAnswersInputObjectSchema).optional(),
  connect: z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema).optional()
}).strict();
export const EmployerQuestionCreateNestedOneWithoutAnswersInputObjectSchema: z.ZodType<Prisma.EmployerQuestionCreateNestedOneWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionCreateNestedOneWithoutAnswersInput>;
export const EmployerQuestionCreateNestedOneWithoutAnswersInputObjectZodSchema = makeSchema();
