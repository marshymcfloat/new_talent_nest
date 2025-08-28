import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateWithoutAnswersInputObjectSchema } from './JobApplicationCreateWithoutAnswersInput.schema';
import { JobApplicationUncheckedCreateWithoutAnswersInputObjectSchema } from './JobApplicationUncheckedCreateWithoutAnswersInput.schema';
import { JobApplicationCreateOrConnectWithoutAnswersInputObjectSchema } from './JobApplicationCreateOrConnectWithoutAnswersInput.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => JobApplicationCreateWithoutAnswersInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutAnswersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => JobApplicationCreateOrConnectWithoutAnswersInputObjectSchema).optional(),
  connect: z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).optional()
}).strict();
export const JobApplicationCreateNestedOneWithoutAnswersInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateNestedOneWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateNestedOneWithoutAnswersInput>;
export const JobApplicationCreateNestedOneWithoutAnswersInputObjectZodSchema = makeSchema();
