import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionCreateWithoutAnswersInputObjectSchema } from './EmployerQuestionCreateWithoutAnswersInput.schema';
import { EmployerQuestionUncheckedCreateWithoutAnswersInputObjectSchema } from './EmployerQuestionUncheckedCreateWithoutAnswersInput.schema';
import { EmployerQuestionCreateOrConnectWithoutAnswersInputObjectSchema } from './EmployerQuestionCreateOrConnectWithoutAnswersInput.schema';
import { EmployerQuestionUpsertWithoutAnswersInputObjectSchema } from './EmployerQuestionUpsertWithoutAnswersInput.schema';
import { EmployerQuestionWhereUniqueInputObjectSchema } from './EmployerQuestionWhereUniqueInput.schema';
import { EmployerQuestionUpdateToOneWithWhereWithoutAnswersInputObjectSchema } from './EmployerQuestionUpdateToOneWithWhereWithoutAnswersInput.schema';
import { EmployerQuestionUpdateWithoutAnswersInputObjectSchema } from './EmployerQuestionUpdateWithoutAnswersInput.schema';
import { EmployerQuestionUncheckedUpdateWithoutAnswersInputObjectSchema } from './EmployerQuestionUncheckedUpdateWithoutAnswersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmployerQuestionCreateWithoutAnswersInputObjectSchema), z.lazy(() => EmployerQuestionUncheckedCreateWithoutAnswersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmployerQuestionCreateOrConnectWithoutAnswersInputObjectSchema).optional(),
  upsert: z.lazy(() => EmployerQuestionUpsertWithoutAnswersInputObjectSchema).optional(),
  connect: z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EmployerQuestionUpdateToOneWithWhereWithoutAnswersInputObjectSchema), z.lazy(() => EmployerQuestionUpdateWithoutAnswersInputObjectSchema), z.lazy(() => EmployerQuestionUncheckedUpdateWithoutAnswersInputObjectSchema)]).optional()
}).strict();
export const EmployerQuestionUpdateOneRequiredWithoutAnswersNestedInputObjectSchema: z.ZodType<Prisma.EmployerQuestionUpdateOneRequiredWithoutAnswersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionUpdateOneRequiredWithoutAnswersNestedInput>;
export const EmployerQuestionUpdateOneRequiredWithoutAnswersNestedInputObjectZodSchema = makeSchema();
