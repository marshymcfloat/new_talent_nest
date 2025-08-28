import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionUpdateWithoutAnswersInputObjectSchema } from './EmployerQuestionUpdateWithoutAnswersInput.schema';
import { EmployerQuestionUncheckedUpdateWithoutAnswersInputObjectSchema } from './EmployerQuestionUncheckedUpdateWithoutAnswersInput.schema';
import { EmployerQuestionCreateWithoutAnswersInputObjectSchema } from './EmployerQuestionCreateWithoutAnswersInput.schema';
import { EmployerQuestionUncheckedCreateWithoutAnswersInputObjectSchema } from './EmployerQuestionUncheckedCreateWithoutAnswersInput.schema';
import { EmployerQuestionWhereInputObjectSchema } from './EmployerQuestionWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  update: z.union([z.lazy(() => EmployerQuestionUpdateWithoutAnswersInputObjectSchema), z.lazy(() => EmployerQuestionUncheckedUpdateWithoutAnswersInputObjectSchema)]),
  create: z.union([z.lazy(() => EmployerQuestionCreateWithoutAnswersInputObjectSchema), z.lazy(() => EmployerQuestionUncheckedCreateWithoutAnswersInputObjectSchema)]),
  where: z.lazy(() => EmployerQuestionWhereInputObjectSchema).optional()
}).strict();
export const EmployerQuestionUpsertWithoutAnswersInputObjectSchema: z.ZodType<Prisma.EmployerQuestionUpsertWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionUpsertWithoutAnswersInput>;
export const EmployerQuestionUpsertWithoutAnswersInputObjectZodSchema = makeSchema();
