import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCreateWithoutEmployerQuestionsInputObjectSchema } from './JobCreateWithoutEmployerQuestionsInput.schema';
import { JobUncheckedCreateWithoutEmployerQuestionsInputObjectSchema } from './JobUncheckedCreateWithoutEmployerQuestionsInput.schema';
import { JobCreateOrConnectWithoutEmployerQuestionsInputObjectSchema } from './JobCreateOrConnectWithoutEmployerQuestionsInput.schema';
import { JobUpsertWithoutEmployerQuestionsInputObjectSchema } from './JobUpsertWithoutEmployerQuestionsInput.schema';
import { JobWhereUniqueInputObjectSchema } from './JobWhereUniqueInput.schema';
import { JobUpdateToOneWithWhereWithoutEmployerQuestionsInputObjectSchema } from './JobUpdateToOneWithWhereWithoutEmployerQuestionsInput.schema';
import { JobUpdateWithoutEmployerQuestionsInputObjectSchema } from './JobUpdateWithoutEmployerQuestionsInput.schema';
import { JobUncheckedUpdateWithoutEmployerQuestionsInputObjectSchema } from './JobUncheckedUpdateWithoutEmployerQuestionsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => JobCreateWithoutEmployerQuestionsInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutEmployerQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => JobCreateOrConnectWithoutEmployerQuestionsInputObjectSchema).optional(),
  upsert: z.lazy(() => JobUpsertWithoutEmployerQuestionsInputObjectSchema).optional(),
  connect: z.lazy(() => JobWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => JobUpdateToOneWithWhereWithoutEmployerQuestionsInputObjectSchema), z.lazy(() => JobUpdateWithoutEmployerQuestionsInputObjectSchema), z.lazy(() => JobUncheckedUpdateWithoutEmployerQuestionsInputObjectSchema)]).optional()
}).strict();
export const JobUpdateOneRequiredWithoutEmployerQuestionsNestedInputObjectSchema: z.ZodType<Prisma.JobUpdateOneRequiredWithoutEmployerQuestionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUpdateOneRequiredWithoutEmployerQuestionsNestedInput>;
export const JobUpdateOneRequiredWithoutEmployerQuestionsNestedInputObjectZodSchema = makeSchema();
