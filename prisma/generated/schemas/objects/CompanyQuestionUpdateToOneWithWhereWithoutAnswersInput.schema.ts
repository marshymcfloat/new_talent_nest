import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionWhereInputObjectSchema } from './CompanyQuestionWhereInput.schema';
import { CompanyQuestionUpdateWithoutAnswersInputObjectSchema } from './CompanyQuestionUpdateWithoutAnswersInput.schema';
import { CompanyQuestionUncheckedUpdateWithoutAnswersInputObjectSchema } from './CompanyQuestionUncheckedUpdateWithoutAnswersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompanyQuestionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CompanyQuestionUpdateWithoutAnswersInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedUpdateWithoutAnswersInputObjectSchema)])
}).strict();
export const CompanyQuestionUpdateToOneWithWhereWithoutAnswersInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUpdateToOneWithWhereWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUpdateToOneWithWhereWithoutAnswersInput>;
export const CompanyQuestionUpdateToOneWithWhereWithoutAnswersInputObjectZodSchema = makeSchema();
