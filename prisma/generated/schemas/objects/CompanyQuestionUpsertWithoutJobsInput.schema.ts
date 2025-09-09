import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionUpdateWithoutJobsInputObjectSchema } from './CompanyQuestionUpdateWithoutJobsInput.schema';
import { CompanyQuestionUncheckedUpdateWithoutJobsInputObjectSchema } from './CompanyQuestionUncheckedUpdateWithoutJobsInput.schema';
import { CompanyQuestionCreateWithoutJobsInputObjectSchema } from './CompanyQuestionCreateWithoutJobsInput.schema';
import { CompanyQuestionUncheckedCreateWithoutJobsInputObjectSchema } from './CompanyQuestionUncheckedCreateWithoutJobsInput.schema';
import { CompanyQuestionWhereInputObjectSchema } from './CompanyQuestionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CompanyQuestionUpdateWithoutJobsInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedUpdateWithoutJobsInputObjectSchema)]),
  create: z.union([z.lazy(() => CompanyQuestionCreateWithoutJobsInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedCreateWithoutJobsInputObjectSchema)]),
  where: z.lazy(() => CompanyQuestionWhereInputObjectSchema).optional()
}).strict();
export const CompanyQuestionUpsertWithoutJobsInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUpsertWithoutJobsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUpsertWithoutJobsInput>;
export const CompanyQuestionUpsertWithoutJobsInputObjectZodSchema = makeSchema();
