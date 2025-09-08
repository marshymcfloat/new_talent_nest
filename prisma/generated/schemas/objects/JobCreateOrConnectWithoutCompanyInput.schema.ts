import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobWhereUniqueInputObjectSchema } from './JobWhereUniqueInput.schema';
import { JobCreateWithoutCompanyInputObjectSchema } from './JobCreateWithoutCompanyInput.schema';
import { JobUncheckedCreateWithoutCompanyInputObjectSchema } from './JobUncheckedCreateWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => JobWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => JobCreateWithoutCompanyInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutCompanyInputObjectSchema)])
}).strict();
export const JobCreateOrConnectWithoutCompanyInputObjectSchema: z.ZodType<Prisma.JobCreateOrConnectWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.JobCreateOrConnectWithoutCompanyInput>;
export const JobCreateOrConnectWithoutCompanyInputObjectZodSchema = makeSchema();
