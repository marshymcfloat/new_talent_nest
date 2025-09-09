import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionCreateWithoutJobsInputObjectSchema } from './CompanyQuestionCreateWithoutJobsInput.schema';
import { CompanyQuestionUncheckedCreateWithoutJobsInputObjectSchema } from './CompanyQuestionUncheckedCreateWithoutJobsInput.schema';
import { CompanyQuestionCreateOrConnectWithoutJobsInputObjectSchema } from './CompanyQuestionCreateOrConnectWithoutJobsInput.schema';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './CompanyQuestionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyQuestionCreateWithoutJobsInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedCreateWithoutJobsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompanyQuestionCreateOrConnectWithoutJobsInputObjectSchema).optional(),
  connect: z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema).optional()
}).strict();
export const CompanyQuestionCreateNestedOneWithoutJobsInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCreateNestedOneWithoutJobsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCreateNestedOneWithoutJobsInput>;
export const CompanyQuestionCreateNestedOneWithoutJobsInputObjectZodSchema = makeSchema();
