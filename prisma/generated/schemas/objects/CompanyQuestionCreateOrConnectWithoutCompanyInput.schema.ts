import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './CompanyQuestionWhereUniqueInput.schema';
import { CompanyQuestionCreateWithoutCompanyInputObjectSchema } from './CompanyQuestionCreateWithoutCompanyInput.schema';
import { CompanyQuestionUncheckedCreateWithoutCompanyInputObjectSchema } from './CompanyQuestionUncheckedCreateWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CompanyQuestionCreateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedCreateWithoutCompanyInputObjectSchema)])
}).strict();
export const CompanyQuestionCreateOrConnectWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCreateOrConnectWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCreateOrConnectWithoutCompanyInput>;
export const CompanyQuestionCreateOrConnectWithoutCompanyInputObjectZodSchema = makeSchema();
