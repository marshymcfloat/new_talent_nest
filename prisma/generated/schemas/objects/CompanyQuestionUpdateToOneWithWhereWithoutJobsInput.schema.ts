import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionWhereInputObjectSchema } from './CompanyQuestionWhereInput.schema';
import { CompanyQuestionUpdateWithoutJobsInputObjectSchema } from './CompanyQuestionUpdateWithoutJobsInput.schema';
import { CompanyQuestionUncheckedUpdateWithoutJobsInputObjectSchema } from './CompanyQuestionUncheckedUpdateWithoutJobsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompanyQuestionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CompanyQuestionUpdateWithoutJobsInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedUpdateWithoutJobsInputObjectSchema)])
}).strict();
export const CompanyQuestionUpdateToOneWithWhereWithoutJobsInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUpdateToOneWithWhereWithoutJobsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUpdateToOneWithWhereWithoutJobsInput>;
export const CompanyQuestionUpdateToOneWithWhereWithoutJobsInputObjectZodSchema = makeSchema();
