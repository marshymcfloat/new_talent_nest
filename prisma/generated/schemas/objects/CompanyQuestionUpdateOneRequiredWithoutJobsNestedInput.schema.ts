import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionCreateWithoutJobsInputObjectSchema } from './CompanyQuestionCreateWithoutJobsInput.schema';
import { CompanyQuestionUncheckedCreateWithoutJobsInputObjectSchema } from './CompanyQuestionUncheckedCreateWithoutJobsInput.schema';
import { CompanyQuestionCreateOrConnectWithoutJobsInputObjectSchema } from './CompanyQuestionCreateOrConnectWithoutJobsInput.schema';
import { CompanyQuestionUpsertWithoutJobsInputObjectSchema } from './CompanyQuestionUpsertWithoutJobsInput.schema';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './CompanyQuestionWhereUniqueInput.schema';
import { CompanyQuestionUpdateToOneWithWhereWithoutJobsInputObjectSchema } from './CompanyQuestionUpdateToOneWithWhereWithoutJobsInput.schema';
import { CompanyQuestionUpdateWithoutJobsInputObjectSchema } from './CompanyQuestionUpdateWithoutJobsInput.schema';
import { CompanyQuestionUncheckedUpdateWithoutJobsInputObjectSchema } from './CompanyQuestionUncheckedUpdateWithoutJobsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyQuestionCreateWithoutJobsInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedCreateWithoutJobsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompanyQuestionCreateOrConnectWithoutJobsInputObjectSchema).optional(),
  upsert: z.lazy(() => CompanyQuestionUpsertWithoutJobsInputObjectSchema).optional(),
  connect: z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CompanyQuestionUpdateToOneWithWhereWithoutJobsInputObjectSchema), z.lazy(() => CompanyQuestionUpdateWithoutJobsInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedUpdateWithoutJobsInputObjectSchema)]).optional()
}).strict();
export const CompanyQuestionUpdateOneRequiredWithoutJobsNestedInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUpdateOneRequiredWithoutJobsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUpdateOneRequiredWithoutJobsNestedInput>;
export const CompanyQuestionUpdateOneRequiredWithoutJobsNestedInputObjectZodSchema = makeSchema();
