import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './CompanyQuestionWhereUniqueInput.schema';
import { CompanyQuestionCreateWithoutAnswersInputObjectSchema } from './CompanyQuestionCreateWithoutAnswersInput.schema';
import { CompanyQuestionUncheckedCreateWithoutAnswersInputObjectSchema } from './CompanyQuestionUncheckedCreateWithoutAnswersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CompanyQuestionCreateWithoutAnswersInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedCreateWithoutAnswersInputObjectSchema)])
}).strict();
export const CompanyQuestionCreateOrConnectWithoutAnswersInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCreateOrConnectWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCreateOrConnectWithoutAnswersInput>;
export const CompanyQuestionCreateOrConnectWithoutAnswersInputObjectZodSchema = makeSchema();
