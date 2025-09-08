import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema';
import { JobApplicationUpdateWithoutUserInputObjectSchema } from './JobApplicationUpdateWithoutUserInput.schema';
import { JobApplicationUncheckedUpdateWithoutUserInputObjectSchema } from './JobApplicationUncheckedUpdateWithoutUserInput.schema';
import { JobApplicationCreateWithoutUserInputObjectSchema } from './JobApplicationCreateWithoutUserInput.schema';
import { JobApplicationUncheckedCreateWithoutUserInputObjectSchema } from './JobApplicationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => JobApplicationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => JobApplicationUpdateWithoutUserInputObjectSchema), z.lazy(() => JobApplicationUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => JobApplicationCreateWithoutUserInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const JobApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.JobApplicationUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpsertWithWhereUniqueWithoutUserInput>;
export const JobApplicationUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
