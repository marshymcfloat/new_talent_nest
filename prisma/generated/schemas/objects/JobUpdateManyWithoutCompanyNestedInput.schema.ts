import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCreateWithoutCompanyInputObjectSchema } from './JobCreateWithoutCompanyInput.schema';
import { JobUncheckedCreateWithoutCompanyInputObjectSchema } from './JobUncheckedCreateWithoutCompanyInput.schema';
import { JobCreateOrConnectWithoutCompanyInputObjectSchema } from './JobCreateOrConnectWithoutCompanyInput.schema';
import { JobUpsertWithWhereUniqueWithoutCompanyInputObjectSchema } from './JobUpsertWithWhereUniqueWithoutCompanyInput.schema';
import { JobCreateManyCompanyInputEnvelopeObjectSchema } from './JobCreateManyCompanyInputEnvelope.schema';
import { JobWhereUniqueInputObjectSchema } from './JobWhereUniqueInput.schema';
import { JobUpdateWithWhereUniqueWithoutCompanyInputObjectSchema } from './JobUpdateWithWhereUniqueWithoutCompanyInput.schema';
import { JobUpdateManyWithWhereWithoutCompanyInputObjectSchema } from './JobUpdateManyWithWhereWithoutCompanyInput.schema';
import { JobScalarWhereInputObjectSchema } from './JobScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => JobCreateWithoutCompanyInputObjectSchema), z.lazy(() => JobCreateWithoutCompanyInputObjectSchema).array(), z.lazy(() => JobUncheckedCreateWithoutCompanyInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutCompanyInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => JobCreateOrConnectWithoutCompanyInputObjectSchema), z.lazy(() => JobCreateOrConnectWithoutCompanyInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => JobUpsertWithWhereUniqueWithoutCompanyInputObjectSchema), z.lazy(() => JobUpsertWithWhereUniqueWithoutCompanyInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => JobCreateManyCompanyInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => JobWhereUniqueInputObjectSchema), z.lazy(() => JobWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => JobWhereUniqueInputObjectSchema), z.lazy(() => JobWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => JobWhereUniqueInputObjectSchema), z.lazy(() => JobWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => JobWhereUniqueInputObjectSchema), z.lazy(() => JobWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => JobUpdateWithWhereUniqueWithoutCompanyInputObjectSchema), z.lazy(() => JobUpdateWithWhereUniqueWithoutCompanyInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => JobUpdateManyWithWhereWithoutCompanyInputObjectSchema), z.lazy(() => JobUpdateManyWithWhereWithoutCompanyInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => JobScalarWhereInputObjectSchema), z.lazy(() => JobScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const JobUpdateManyWithoutCompanyNestedInputObjectSchema: z.ZodType<Prisma.JobUpdateManyWithoutCompanyNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUpdateManyWithoutCompanyNestedInput>;
export const JobUpdateManyWithoutCompanyNestedInputObjectZodSchema = makeSchema();
