import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionWhereUniqueInputObjectSchema } from './EmployerQuestionWhereUniqueInput.schema';
import { EmployerQuestionUpdateWithoutJobInputObjectSchema } from './EmployerQuestionUpdateWithoutJobInput.schema';
import { EmployerQuestionUncheckedUpdateWithoutJobInputObjectSchema } from './EmployerQuestionUncheckedUpdateWithoutJobInput.schema';
import { EmployerQuestionCreateWithoutJobInputObjectSchema } from './EmployerQuestionCreateWithoutJobInput.schema';
import { EmployerQuestionUncheckedCreateWithoutJobInputObjectSchema } from './EmployerQuestionUncheckedCreateWithoutJobInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EmployerQuestionUpdateWithoutJobInputObjectSchema), z.lazy(() => EmployerQuestionUncheckedUpdateWithoutJobInputObjectSchema)]),
  create: z.union([z.lazy(() => EmployerQuestionCreateWithoutJobInputObjectSchema), z.lazy(() => EmployerQuestionUncheckedCreateWithoutJobInputObjectSchema)])
}).strict();
export const EmployerQuestionUpsertWithWhereUniqueWithoutJobInputObjectSchema: z.ZodType<Prisma.EmployerQuestionUpsertWithWhereUniqueWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionUpsertWithWhereUniqueWithoutJobInput>;
export const EmployerQuestionUpsertWithWhereUniqueWithoutJobInputObjectZodSchema = makeSchema();
