import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema';
import { JobApplicationUpdateWithoutUserInputObjectSchema } from './JobApplicationUpdateWithoutUserInput.schema';
import { JobApplicationUncheckedUpdateWithoutUserInputObjectSchema } from './JobApplicationUncheckedUpdateWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => JobApplicationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => JobApplicationUpdateWithoutUserInputObjectSchema), z.lazy(() => JobApplicationUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const JobApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateWithWhereUniqueWithoutUserInput>;
export const JobApplicationUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
