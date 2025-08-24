import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCreateWithoutJobApplicationInputObjectSchema } from './JobCreateWithoutJobApplicationInput.schema';
import { JobUncheckedCreateWithoutJobApplicationInputObjectSchema } from './JobUncheckedCreateWithoutJobApplicationInput.schema';
import { JobCreateOrConnectWithoutJobApplicationInputObjectSchema } from './JobCreateOrConnectWithoutJobApplicationInput.schema';
import { JobUpsertWithoutJobApplicationInputObjectSchema } from './JobUpsertWithoutJobApplicationInput.schema';
import { JobWhereUniqueInputObjectSchema } from './JobWhereUniqueInput.schema';
import { JobUpdateToOneWithWhereWithoutJobApplicationInputObjectSchema } from './JobUpdateToOneWithWhereWithoutJobApplicationInput.schema';
import { JobUpdateWithoutJobApplicationInputObjectSchema } from './JobUpdateWithoutJobApplicationInput.schema';
import { JobUncheckedUpdateWithoutJobApplicationInputObjectSchema } from './JobUncheckedUpdateWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => JobCreateWithoutJobApplicationInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutJobApplicationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => JobCreateOrConnectWithoutJobApplicationInputObjectSchema).optional(),
  upsert: z.lazy(() => JobUpsertWithoutJobApplicationInputObjectSchema).optional(),
  connect: z.lazy(() => JobWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => JobUpdateToOneWithWhereWithoutJobApplicationInputObjectSchema), z.lazy(() => JobUpdateWithoutJobApplicationInputObjectSchema), z.lazy(() => JobUncheckedUpdateWithoutJobApplicationInputObjectSchema)]).optional()
}).strict();
export const JobUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema: z.ZodType<Prisma.JobUpdateOneRequiredWithoutJobApplicationNestedInput> = makeSchema();
export const JobUpdateOneRequiredWithoutJobApplicationNestedInputObjectZodSchema = makeSchema();
