import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionScalarWhereInputObjectSchema } from './CompanyQuestionScalarWhereInput.schema';
import { CompanyQuestionUpdateManyMutationInputObjectSchema } from './CompanyQuestionUpdateManyMutationInput.schema';
import { CompanyQuestionUncheckedUpdateManyWithoutCompanyInputObjectSchema } from './CompanyQuestionUncheckedUpdateManyWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompanyQuestionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CompanyQuestionUpdateManyMutationInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedUpdateManyWithoutCompanyInputObjectSchema)])
}).strict();
export const CompanyQuestionUpdateManyWithWhereWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUpdateManyWithWhereWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUpdateManyWithWhereWithoutCompanyInput>;
export const CompanyQuestionUpdateManyWithWhereWithoutCompanyInputObjectZodSchema = makeSchema();
