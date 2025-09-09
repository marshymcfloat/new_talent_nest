import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './CompanyQuestionWhereUniqueInput.schema';
import { CompanyQuestionUpdateWithoutCompanyInputObjectSchema } from './CompanyQuestionUpdateWithoutCompanyInput.schema';
import { CompanyQuestionUncheckedUpdateWithoutCompanyInputObjectSchema } from './CompanyQuestionUncheckedUpdateWithoutCompanyInput.schema';
import { CompanyQuestionCreateWithoutCompanyInputObjectSchema } from './CompanyQuestionCreateWithoutCompanyInput.schema';
import { CompanyQuestionUncheckedCreateWithoutCompanyInputObjectSchema } from './CompanyQuestionUncheckedCreateWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CompanyQuestionUpdateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedUpdateWithoutCompanyInputObjectSchema)]),
  create: z.union([z.lazy(() => CompanyQuestionCreateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedCreateWithoutCompanyInputObjectSchema)])
}).strict();
export const CompanyQuestionUpsertWithWhereUniqueWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUpsertWithWhereUniqueWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUpsertWithWhereUniqueWithoutCompanyInput>;
export const CompanyQuestionUpsertWithWhereUniqueWithoutCompanyInputObjectZodSchema = makeSchema();
