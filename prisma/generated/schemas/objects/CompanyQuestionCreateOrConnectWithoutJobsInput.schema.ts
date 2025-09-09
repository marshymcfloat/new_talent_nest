import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './CompanyQuestionWhereUniqueInput.schema';
import { CompanyQuestionCreateWithoutJobsInputObjectSchema } from './CompanyQuestionCreateWithoutJobsInput.schema';
import { CompanyQuestionUncheckedCreateWithoutJobsInputObjectSchema } from './CompanyQuestionUncheckedCreateWithoutJobsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CompanyQuestionCreateWithoutJobsInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedCreateWithoutJobsInputObjectSchema)])
}).strict();
export const CompanyQuestionCreateOrConnectWithoutJobsInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCreateOrConnectWithoutJobsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCreateOrConnectWithoutJobsInput>;
export const CompanyQuestionCreateOrConnectWithoutJobsInputObjectZodSchema = makeSchema();
