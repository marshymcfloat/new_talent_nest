import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationScalarWhereInputObjectSchema } from './JobApplicationScalarWhereInput.schema';
import { JobApplicationUpdateManyMutationInputObjectSchema } from './JobApplicationUpdateManyMutationInput.schema';
import { JobApplicationUncheckedUpdateManyWithoutUserInputObjectSchema } from './JobApplicationUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => JobApplicationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => JobApplicationUpdateManyMutationInputObjectSchema), z.lazy(() => JobApplicationUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const JobApplicationUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateManyWithWhereWithoutUserInput> = makeSchema();
export const JobApplicationUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
