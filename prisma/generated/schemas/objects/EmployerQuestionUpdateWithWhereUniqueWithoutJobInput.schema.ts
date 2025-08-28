import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionWhereUniqueInputObjectSchema } from './EmployerQuestionWhereUniqueInput.schema';
import { EmployerQuestionUpdateWithoutJobInputObjectSchema } from './EmployerQuestionUpdateWithoutJobInput.schema';
import { EmployerQuestionUncheckedUpdateWithoutJobInputObjectSchema } from './EmployerQuestionUncheckedUpdateWithoutJobInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EmployerQuestionUpdateWithoutJobInputObjectSchema), z.lazy(() => EmployerQuestionUncheckedUpdateWithoutJobInputObjectSchema)])
}).strict();
export const EmployerQuestionUpdateWithWhereUniqueWithoutJobInputObjectSchema: z.ZodType<Prisma.EmployerQuestionUpdateWithWhereUniqueWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionUpdateWithWhereUniqueWithoutJobInput>;
export const EmployerQuestionUpdateWithWhereUniqueWithoutJobInputObjectZodSchema = makeSchema();
