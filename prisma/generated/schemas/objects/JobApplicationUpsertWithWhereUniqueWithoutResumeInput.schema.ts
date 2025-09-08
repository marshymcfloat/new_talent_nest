import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema';
import { JobApplicationUpdateWithoutResumeInputObjectSchema } from './JobApplicationUpdateWithoutResumeInput.schema';
import { JobApplicationUncheckedUpdateWithoutResumeInputObjectSchema } from './JobApplicationUncheckedUpdateWithoutResumeInput.schema';
import { JobApplicationCreateWithoutResumeInputObjectSchema } from './JobApplicationCreateWithoutResumeInput.schema';
import { JobApplicationUncheckedCreateWithoutResumeInputObjectSchema } from './JobApplicationUncheckedCreateWithoutResumeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => JobApplicationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => JobApplicationUpdateWithoutResumeInputObjectSchema), z.lazy(() => JobApplicationUncheckedUpdateWithoutResumeInputObjectSchema)]),
  create: z.union([z.lazy(() => JobApplicationCreateWithoutResumeInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutResumeInputObjectSchema)])
}).strict();
export const JobApplicationUpsertWithWhereUniqueWithoutResumeInputObjectSchema: z.ZodType<Prisma.JobApplicationUpsertWithWhereUniqueWithoutResumeInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpsertWithWhereUniqueWithoutResumeInput>;
export const JobApplicationUpsertWithWhereUniqueWithoutResumeInputObjectZodSchema = makeSchema();
