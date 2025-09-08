import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionCreateWithoutJobInputObjectSchema } from './EmployerQuestionCreateWithoutJobInput.schema';
import { EmployerQuestionUncheckedCreateWithoutJobInputObjectSchema } from './EmployerQuestionUncheckedCreateWithoutJobInput.schema';
import { EmployerQuestionCreateOrConnectWithoutJobInputObjectSchema } from './EmployerQuestionCreateOrConnectWithoutJobInput.schema';
import { EmployerQuestionCreateManyJobInputEnvelopeObjectSchema } from './EmployerQuestionCreateManyJobInputEnvelope.schema';
import { EmployerQuestionWhereUniqueInputObjectSchema } from './EmployerQuestionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmployerQuestionCreateWithoutJobInputObjectSchema), z.lazy(() => EmployerQuestionCreateWithoutJobInputObjectSchema).array(), z.lazy(() => EmployerQuestionUncheckedCreateWithoutJobInputObjectSchema), z.lazy(() => EmployerQuestionUncheckedCreateWithoutJobInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EmployerQuestionCreateOrConnectWithoutJobInputObjectSchema), z.lazy(() => EmployerQuestionCreateOrConnectWithoutJobInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EmployerQuestionCreateManyJobInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema), z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EmployerQuestionUncheckedCreateNestedManyWithoutJobInputObjectSchema: z.ZodType<Prisma.EmployerQuestionUncheckedCreateNestedManyWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionUncheckedCreateNestedManyWithoutJobInput>;
export const EmployerQuestionUncheckedCreateNestedManyWithoutJobInputObjectZodSchema = makeSchema();
