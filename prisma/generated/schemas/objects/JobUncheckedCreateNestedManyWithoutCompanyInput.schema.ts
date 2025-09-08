import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCreateWithoutCompanyInputObjectSchema } from './JobCreateWithoutCompanyInput.schema';
import { JobUncheckedCreateWithoutCompanyInputObjectSchema } from './JobUncheckedCreateWithoutCompanyInput.schema';
import { JobCreateOrConnectWithoutCompanyInputObjectSchema } from './JobCreateOrConnectWithoutCompanyInput.schema';
import { JobCreateManyCompanyInputEnvelopeObjectSchema } from './JobCreateManyCompanyInputEnvelope.schema';
import { JobWhereUniqueInputObjectSchema } from './JobWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => JobCreateWithoutCompanyInputObjectSchema), z.lazy(() => JobCreateWithoutCompanyInputObjectSchema).array(), z.lazy(() => JobUncheckedCreateWithoutCompanyInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutCompanyInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => JobCreateOrConnectWithoutCompanyInputObjectSchema), z.lazy(() => JobCreateOrConnectWithoutCompanyInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => JobCreateManyCompanyInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => JobWhereUniqueInputObjectSchema), z.lazy(() => JobWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const JobUncheckedCreateNestedManyWithoutCompanyInputObjectSchema: z.ZodType<Prisma.JobUncheckedCreateNestedManyWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUncheckedCreateNestedManyWithoutCompanyInput>;
export const JobUncheckedCreateNestedManyWithoutCompanyInputObjectZodSchema = makeSchema();
