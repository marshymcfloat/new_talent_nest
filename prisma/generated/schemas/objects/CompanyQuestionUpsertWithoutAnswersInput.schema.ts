import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionUpdateWithoutAnswersInputObjectSchema } from './CompanyQuestionUpdateWithoutAnswersInput.schema';
import { CompanyQuestionUncheckedUpdateWithoutAnswersInputObjectSchema } from './CompanyQuestionUncheckedUpdateWithoutAnswersInput.schema';
import { CompanyQuestionCreateWithoutAnswersInputObjectSchema } from './CompanyQuestionCreateWithoutAnswersInput.schema';
import { CompanyQuestionUncheckedCreateWithoutAnswersInputObjectSchema } from './CompanyQuestionUncheckedCreateWithoutAnswersInput.schema';
import { CompanyQuestionWhereInputObjectSchema } from './CompanyQuestionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CompanyQuestionUpdateWithoutAnswersInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedUpdateWithoutAnswersInputObjectSchema)]),
  create: z.union([z.lazy(() => CompanyQuestionCreateWithoutAnswersInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedCreateWithoutAnswersInputObjectSchema)]),
  where: z.lazy(() => CompanyQuestionWhereInputObjectSchema).optional()
}).strict();
export const CompanyQuestionUpsertWithoutAnswersInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUpsertWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUpsertWithoutAnswersInput>;
export const CompanyQuestionUpsertWithoutAnswersInputObjectZodSchema = makeSchema();
