import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionWhereInputObjectSchema } from './EmployerQuestionWhereInput.schema';
import { EmployerQuestionUpdateWithoutAnswersInputObjectSchema } from './EmployerQuestionUpdateWithoutAnswersInput.schema';
import { EmployerQuestionUncheckedUpdateWithoutAnswersInputObjectSchema } from './EmployerQuestionUncheckedUpdateWithoutAnswersInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => EmployerQuestionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EmployerQuestionUpdateWithoutAnswersInputObjectSchema), z.lazy(() => EmployerQuestionUncheckedUpdateWithoutAnswersInputObjectSchema)])
}).strict();
export const EmployerQuestionUpdateToOneWithWhereWithoutAnswersInputObjectSchema: z.ZodType<Prisma.EmployerQuestionUpdateToOneWithWhereWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionUpdateToOneWithWhereWithoutAnswersInput>;
export const EmployerQuestionUpdateToOneWithWhereWithoutAnswersInputObjectZodSchema = makeSchema();
