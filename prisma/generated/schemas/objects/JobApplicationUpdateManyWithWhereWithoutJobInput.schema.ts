import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationScalarWhereInputObjectSchema } from './JobApplicationScalarWhereInput.schema';
import { JobApplicationUpdateManyMutationInputObjectSchema } from './JobApplicationUpdateManyMutationInput.schema';
import { JobApplicationUncheckedUpdateManyWithoutJobInputObjectSchema } from './JobApplicationUncheckedUpdateManyWithoutJobInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => JobApplicationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => JobApplicationUpdateManyMutationInputObjectSchema), z.lazy(() => JobApplicationUncheckedUpdateManyWithoutJobInputObjectSchema)])
}).strict();
export const JobApplicationUpdateManyWithWhereWithoutJobInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateManyWithWhereWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateManyWithWhereWithoutJobInput>;
export const JobApplicationUpdateManyWithWhereWithoutJobInputObjectZodSchema = makeSchema();
