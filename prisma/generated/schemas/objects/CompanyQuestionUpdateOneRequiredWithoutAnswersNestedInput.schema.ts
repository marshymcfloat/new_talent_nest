import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionCreateWithoutAnswersInputObjectSchema } from './CompanyQuestionCreateWithoutAnswersInput.schema';
import { CompanyQuestionUncheckedCreateWithoutAnswersInputObjectSchema } from './CompanyQuestionUncheckedCreateWithoutAnswersInput.schema';
import { CompanyQuestionCreateOrConnectWithoutAnswersInputObjectSchema } from './CompanyQuestionCreateOrConnectWithoutAnswersInput.schema';
import { CompanyQuestionUpsertWithoutAnswersInputObjectSchema } from './CompanyQuestionUpsertWithoutAnswersInput.schema';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './CompanyQuestionWhereUniqueInput.schema';
import { CompanyQuestionUpdateToOneWithWhereWithoutAnswersInputObjectSchema } from './CompanyQuestionUpdateToOneWithWhereWithoutAnswersInput.schema';
import { CompanyQuestionUpdateWithoutAnswersInputObjectSchema } from './CompanyQuestionUpdateWithoutAnswersInput.schema';
import { CompanyQuestionUncheckedUpdateWithoutAnswersInputObjectSchema } from './CompanyQuestionUncheckedUpdateWithoutAnswersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyQuestionCreateWithoutAnswersInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedCreateWithoutAnswersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompanyQuestionCreateOrConnectWithoutAnswersInputObjectSchema).optional(),
  upsert: z.lazy(() => CompanyQuestionUpsertWithoutAnswersInputObjectSchema).optional(),
  connect: z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CompanyQuestionUpdateToOneWithWhereWithoutAnswersInputObjectSchema), z.lazy(() => CompanyQuestionUpdateWithoutAnswersInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedUpdateWithoutAnswersInputObjectSchema)]).optional()
}).strict();
export const CompanyQuestionUpdateOneRequiredWithoutAnswersNestedInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUpdateOneRequiredWithoutAnswersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUpdateOneRequiredWithoutAnswersNestedInput>;
export const CompanyQuestionUpdateOneRequiredWithoutAnswersNestedInputObjectZodSchema = makeSchema();
