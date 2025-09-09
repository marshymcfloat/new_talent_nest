import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionCreateWithoutCompanyInputObjectSchema } from './CompanyQuestionCreateWithoutCompanyInput.schema';
import { CompanyQuestionUncheckedCreateWithoutCompanyInputObjectSchema } from './CompanyQuestionUncheckedCreateWithoutCompanyInput.schema';
import { CompanyQuestionCreateOrConnectWithoutCompanyInputObjectSchema } from './CompanyQuestionCreateOrConnectWithoutCompanyInput.schema';
import { CompanyQuestionUpsertWithWhereUniqueWithoutCompanyInputObjectSchema } from './CompanyQuestionUpsertWithWhereUniqueWithoutCompanyInput.schema';
import { CompanyQuestionCreateManyCompanyInputEnvelopeObjectSchema } from './CompanyQuestionCreateManyCompanyInputEnvelope.schema';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './CompanyQuestionWhereUniqueInput.schema';
import { CompanyQuestionUpdateWithWhereUniqueWithoutCompanyInputObjectSchema } from './CompanyQuestionUpdateWithWhereUniqueWithoutCompanyInput.schema';
import { CompanyQuestionUpdateManyWithWhereWithoutCompanyInputObjectSchema } from './CompanyQuestionUpdateManyWithWhereWithoutCompanyInput.schema';
import { CompanyQuestionScalarWhereInputObjectSchema } from './CompanyQuestionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyQuestionCreateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyQuestionCreateWithoutCompanyInputObjectSchema).array(), z.lazy(() => CompanyQuestionUncheckedCreateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyQuestionUncheckedCreateWithoutCompanyInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CompanyQuestionCreateOrConnectWithoutCompanyInputObjectSchema), z.lazy(() => CompanyQuestionCreateOrConnectWithoutCompanyInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CompanyQuestionUpsertWithWhereUniqueWithoutCompanyInputObjectSchema), z.lazy(() => CompanyQuestionUpsertWithWhereUniqueWithoutCompanyInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CompanyQuestionCreateManyCompanyInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema), z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema), z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema), z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema), z.lazy(() => CompanyQuestionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CompanyQuestionUpdateWithWhereUniqueWithoutCompanyInputObjectSchema), z.lazy(() => CompanyQuestionUpdateWithWhereUniqueWithoutCompanyInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CompanyQuestionUpdateManyWithWhereWithoutCompanyInputObjectSchema), z.lazy(() => CompanyQuestionUpdateManyWithWhereWithoutCompanyInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CompanyQuestionScalarWhereInputObjectSchema), z.lazy(() => CompanyQuestionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CompanyQuestionUncheckedUpdateManyWithoutCompanyNestedInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUncheckedUpdateManyWithoutCompanyNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUncheckedUpdateManyWithoutCompanyNestedInput>;
export const CompanyQuestionUncheckedUpdateManyWithoutCompanyNestedInputObjectZodSchema = makeSchema();
