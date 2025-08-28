import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema';
import { JobApplicationUpdateWithoutResumeInputObjectSchema } from './JobApplicationUpdateWithoutResumeInput.schema';
import { JobApplicationUncheckedUpdateWithoutResumeInputObjectSchema } from './JobApplicationUncheckedUpdateWithoutResumeInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => JobApplicationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => JobApplicationUpdateWithoutResumeInputObjectSchema), z.lazy(() => JobApplicationUncheckedUpdateWithoutResumeInputObjectSchema)])
}).strict();
export const JobApplicationUpdateWithWhereUniqueWithoutResumeInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateWithWhereUniqueWithoutResumeInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateWithWhereUniqueWithoutResumeInput>;
export const JobApplicationUpdateWithWhereUniqueWithoutResumeInputObjectZodSchema = makeSchema();
