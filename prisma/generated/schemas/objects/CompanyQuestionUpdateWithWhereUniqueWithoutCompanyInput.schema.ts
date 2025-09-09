import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './CompanyQuestionWhereUniqueInput.schema';
import { CompanyQuestionUpdateWithoutCompanyInputObjectSchema } from './CompanyQuestionUpdateWithoutCompanyInput.schema';
import { CompanyQuestionUncheckedUpdateWithoutCompanyInputObjectSchema } from './CompanyQuestionUncheckedUpdateWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CompanyQuestionUpdateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedUpdateWithoutCompanyInputObjectSchema)])
}).strict();
export const CompanyQuestionUpdateWithWhereUniqueWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUpdateWithWhereUniqueWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUpdateWithWhereUniqueWithoutCompanyInput>;
export const CompanyQuestionUpdateWithWhereUniqueWithoutCompanyInputObjectZodSchema = makeSchema();
