import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationScalarWhereInputObjectSchema } from './JobApplicationScalarWhereInput.schema';
import { JobApplicationUpdateManyMutationInputObjectSchema } from './JobApplicationUpdateManyMutationInput.schema';
import { JobApplicationUncheckedUpdateManyWithoutResumeInputObjectSchema } from './JobApplicationUncheckedUpdateManyWithoutResumeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => JobApplicationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => JobApplicationUpdateManyMutationInputObjectSchema), z.lazy(() => JobApplicationUncheckedUpdateManyWithoutResumeInputObjectSchema)])
}).strict();
export const JobApplicationUpdateManyWithWhereWithoutResumeInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateManyWithWhereWithoutResumeInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateManyWithWhereWithoutResumeInput>;
export const JobApplicationUpdateManyWithWhereWithoutResumeInputObjectZodSchema = makeSchema();
