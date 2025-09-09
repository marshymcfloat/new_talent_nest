import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCreateWithoutQuestionsInputObjectSchema } from './JobCreateWithoutQuestionsInput.schema';
import { JobUncheckedCreateWithoutQuestionsInputObjectSchema } from './JobUncheckedCreateWithoutQuestionsInput.schema';
import { JobCreateOrConnectWithoutQuestionsInputObjectSchema } from './JobCreateOrConnectWithoutQuestionsInput.schema';
import { JobUpsertWithoutQuestionsInputObjectSchema } from './JobUpsertWithoutQuestionsInput.schema';
import { JobWhereUniqueInputObjectSchema } from './JobWhereUniqueInput.schema';
import { JobUpdateToOneWithWhereWithoutQuestionsInputObjectSchema } from './JobUpdateToOneWithWhereWithoutQuestionsInput.schema';
import { JobUpdateWithoutQuestionsInputObjectSchema } from './JobUpdateWithoutQuestionsInput.schema';
import { JobUncheckedUpdateWithoutQuestionsInputObjectSchema } from './JobUncheckedUpdateWithoutQuestionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => JobCreateWithoutQuestionsInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => JobCreateOrConnectWithoutQuestionsInputObjectSchema).optional(),
  upsert: z.lazy(() => JobUpsertWithoutQuestionsInputObjectSchema).optional(),
  connect: z.lazy(() => JobWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => JobUpdateToOneWithWhereWithoutQuestionsInputObjectSchema), z.lazy(() => JobUpdateWithoutQuestionsInputObjectSchema), z.lazy(() => JobUncheckedUpdateWithoutQuestionsInputObjectSchema)]).optional()
}).strict();
export const JobUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema: z.ZodType<Prisma.JobUpdateOneRequiredWithoutQuestionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUpdateOneRequiredWithoutQuestionsNestedInput>;
export const JobUpdateOneRequiredWithoutQuestionsNestedInputObjectZodSchema = makeSchema();
