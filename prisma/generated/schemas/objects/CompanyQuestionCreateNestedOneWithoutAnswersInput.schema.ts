import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionCreateWithoutAnswersInputObjectSchema } from './CompanyQuestionCreateWithoutAnswersInput.schema';
import { CompanyQuestionUncheckedCreateWithoutAnswersInputObjectSchema } from './CompanyQuestionUncheckedCreateWithoutAnswersInput.schema';
import { CompanyQuestionCreateOrConnectWithoutAnswersInputObjectSchema } from './CompanyQuestionCreateOrConnectWithoutAnswersInput.schema';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './CompanyQuestionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyQuestionCreateWithoutAnswersInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedCreateWithoutAnswersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompanyQuestionCreateOrConnectWithoutAnswersInputObjectSchema).optional(),
  connect: z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema).optional()
}).strict();
export const CompanyQuestionCreateNestedOneWithoutAnswersInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCreateNestedOneWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCreateNestedOneWithoutAnswersInput>;
export const CompanyQuestionCreateNestedOneWithoutAnswersInputObjectZodSchema = makeSchema();
