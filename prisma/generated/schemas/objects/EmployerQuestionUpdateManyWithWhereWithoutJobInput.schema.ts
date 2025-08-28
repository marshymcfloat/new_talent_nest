import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionScalarWhereInputObjectSchema } from './EmployerQuestionScalarWhereInput.schema';
import { EmployerQuestionUpdateManyMutationInputObjectSchema } from './EmployerQuestionUpdateManyMutationInput.schema';
import { EmployerQuestionUncheckedUpdateManyWithoutJobInputObjectSchema } from './EmployerQuestionUncheckedUpdateManyWithoutJobInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => EmployerQuestionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EmployerQuestionUpdateManyMutationInputObjectSchema), z.lazy(() => EmployerQuestionUncheckedUpdateManyWithoutJobInputObjectSchema)])
}).strict();
export const EmployerQuestionUpdateManyWithWhereWithoutJobInputObjectSchema: z.ZodType<Prisma.EmployerQuestionUpdateManyWithWhereWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionUpdateManyWithWhereWithoutJobInput>;
export const EmployerQuestionUpdateManyWithWhereWithoutJobInputObjectZodSchema = makeSchema();
