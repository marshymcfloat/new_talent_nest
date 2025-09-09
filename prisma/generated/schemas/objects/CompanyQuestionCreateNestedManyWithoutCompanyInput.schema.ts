import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionCreateWithoutCompanyInputObjectSchema } from './CompanyQuestionCreateWithoutCompanyInput.schema';
import { CompanyQuestionUncheckedCreateWithoutCompanyInputObjectSchema } from './CompanyQuestionUncheckedCreateWithoutCompanyInput.schema';
import { CompanyQuestionCreateOrConnectWithoutCompanyInputObjectSchema } from './CompanyQuestionCreateOrConnectWithoutCompanyInput.schema';
import { CompanyQuestionCreateManyCompanyInputEnvelopeObjectSchema } from './CompanyQuestionCreateManyCompanyInputEnvelope.schema';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './CompanyQuestionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyQuestionCreateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyQuestionCreateWithoutCompanyInputObjectSchema).array(), z.lazy(() => CompanyQuestionUncheckedCreateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedCreateWithoutCompanyInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CompanyQuestionCreateOrConnectWithoutCompanyInputObjectSchema), z.lazy(() => CompanyQuestionCreateOrConnectWithoutCompanyInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CompanyQuestionCreateManyCompanyInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema), z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CompanyQuestionCreateNestedManyWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCreateNestedManyWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCreateNestedManyWithoutCompanyInput>;
export const CompanyQuestionCreateNestedManyWithoutCompanyInputObjectZodSchema = makeSchema();
