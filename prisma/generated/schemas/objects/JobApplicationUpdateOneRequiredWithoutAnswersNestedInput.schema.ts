import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateWithoutAnswersInputObjectSchema } from './JobApplicationCreateWithoutAnswersInput.schema';
import { JobApplicationUncheckedCreateWithoutAnswersInputObjectSchema } from './JobApplicationUncheckedCreateWithoutAnswersInput.schema';
import { JobApplicationCreateOrConnectWithoutAnswersInputObjectSchema } from './JobApplicationCreateOrConnectWithoutAnswersInput.schema';
import { JobApplicationUpsertWithoutAnswersInputObjectSchema } from './JobApplicationUpsertWithoutAnswersInput.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema';
import { JobApplicationUpdateToOneWithWhereWithoutAnswersInputObjectSchema } from './JobApplicationUpdateToOneWithWhereWithoutAnswersInput.schema';
import { JobApplicationUpdateWithoutAnswersInputObjectSchema } from './JobApplicationUpdateWithoutAnswersInput.schema';
import { JobApplicationUncheckedUpdateWithoutAnswersInputObjectSchema } from './JobApplicationUncheckedUpdateWithoutAnswersInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => JobApplicationCreateWithoutAnswersInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutAnswersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => JobApplicationCreateOrConnectWithoutAnswersInputObjectSchema).optional(),
  upsert: z.lazy(() => JobApplicationUpsertWithoutAnswersInputObjectSchema).optional(),
  connect: z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => JobApplicationUpdateToOneWithWhereWithoutAnswersInputObjectSchema), z.lazy(() => JobApplicationUpdateWithoutAnswersInputObjectSchema), z.lazy(() => JobApplicationUncheckedUpdateWithoutAnswersInputObjectSchema)]).optional()
}).strict();
export const JobApplicationUpdateOneRequiredWithoutAnswersNestedInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateOneRequiredWithoutAnswersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateOneRequiredWithoutAnswersNestedInput>;
export const JobApplicationUpdateOneRequiredWithoutAnswersNestedInputObjectZodSchema = makeSchema();
