import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionWhereUniqueInputObjectSchema } from './EmployerQuestionWhereUniqueInput.schema';
import { EmployerQuestionCreateWithoutJobInputObjectSchema } from './EmployerQuestionCreateWithoutJobInput.schema';
import { EmployerQuestionUncheckedCreateWithoutJobInputObjectSchema } from './EmployerQuestionUncheckedCreateWithoutJobInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => EmployerQuestionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EmployerQuestionCreateWithoutJobInputObjectSchema), z.lazy(() => EmployerQuestionUncheckedCreateWithoutJobInputObjectSchema)])
}).strict();
export const EmployerQuestionCreateOrConnectWithoutJobInputObjectSchema: z.ZodType<Prisma.EmployerQuestionCreateOrConnectWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionCreateOrConnectWithoutJobInput>;
export const EmployerQuestionCreateOrConnectWithoutJobInputObjectZodSchema = makeSchema();
