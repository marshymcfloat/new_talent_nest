import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionCreateWithoutJobInputObjectSchema } from './EmployerQuestionCreateWithoutJobInput.schema';
import { EmployerQuestionUncheckedCreateWithoutJobInputObjectSchema } from './EmployerQuestionUncheckedCreateWithoutJobInput.schema';
import { EmployerQuestionCreateOrConnectWithoutJobInputObjectSchema } from './EmployerQuestionCreateOrConnectWithoutJobInput.schema';
import { EmployerQuestionUpsertWithWhereUniqueWithoutJobInputObjectSchema } from './EmployerQuestionUpsertWithWhereUniqueWithoutJobInput.schema';
import { EmployerQuestionCreateManyJobInputEnvelopeObjectSchema } from './EmployerQuestionCreateManyJobInputEnvelope.schema';
import { EmployerQuestionWhereUniqueInputObjectSchema } from './EmployerQuestionWhereUniqueInput.schema';
import { EmployerQuestionUpdateWithWhereUniqueWithoutJobInputObjectSchema } from './EmployerQuestionUpdateWithWhereUniqueWithoutJobInput.schema';
import { EmployerQuestionUpdateManyWithWhereWithoutJobInputObjectSchema } from './EmployerQuestionUpdateManyWithWhereWithoutJobInput.schema';
import { EmployerQuestionScalarWhereInputObjectSchema } from './EmployerQuestionScalarWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => EmployerQuestionCreateWithoutJobInputObjectSchema), z.lazy(() => EmployerQuestionCreateWithoutJobInputObjectSchema).array(), z.lazy(() => EmployerQuestionUncheckedCreateWithoutJobInputObjectSchema), z.lazy(() => EmployerQuestionUncheckedCreateWithoutJobInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EmployerQuestionCreateOrConnectWithoutJobInputObjectSchema), z.lazy(() => EmployerQuestionCreateOrConnectWithoutJobInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EmployerQuestionUpsertWithWhereUniqueWithoutJobInputObjectSchema), z.lazy(() => EmployerQuestionUpsertWithWhereUniqueWithoutJobInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EmployerQuestionCreateManyJobInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema), z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema), z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema), z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema), z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EmployerQuestionUpdateWithWhereUniqueWithoutJobInputObjectSchema), z.lazy(() => EmployerQuestionUpdateWithWhereUniqueWithoutJobInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EmployerQuestionUpdateManyWithWhereWithoutJobInputObjectSchema), z.lazy(() => EmployerQuestionUpdateManyWithWhereWithoutJobInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EmployerQuestionScalarWhereInputObjectSchema), z.lazy(() => EmployerQuestionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EmployerQuestionUncheckedUpdateManyWithoutJobNestedInputObjectSchema: z.ZodType<Prisma.EmployerQuestionUncheckedUpdateManyWithoutJobNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionUncheckedUpdateManyWithoutJobNestedInput>;
export const EmployerQuestionUncheckedUpdateManyWithoutJobNestedInputObjectZodSchema = makeSchema();
