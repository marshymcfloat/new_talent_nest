import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema';
import { JobApplicationUpdateWithoutJobInputObjectSchema } from './JobApplicationUpdateWithoutJobInput.schema';
import { JobApplicationUncheckedUpdateWithoutJobInputObjectSchema } from './JobApplicationUncheckedUpdateWithoutJobInput.schema';
import { JobApplicationCreateWithoutJobInputObjectSchema } from './JobApplicationCreateWithoutJobInput.schema';
import { JobApplicationUncheckedCreateWithoutJobInputObjectSchema } from './JobApplicationUncheckedCreateWithoutJobInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => JobApplicationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => JobApplicationUpdateWithoutJobInputObjectSchema), z.lazy(() => JobApplicationUncheckedUpdateWithoutJobInputObjectSchema)]),
  create: z.union([z.lazy(() => JobApplicationCreateWithoutJobInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutJobInputObjectSchema)])
}).strict();
export const JobApplicationUpsertWithWhereUniqueWithoutJobInputObjectSchema: z.ZodType<Prisma.JobApplicationUpsertWithWhereUniqueWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpsertWithWhereUniqueWithoutJobInput>;
export const JobApplicationUpsertWithWhereUniqueWithoutJobInputObjectZodSchema = makeSchema();
