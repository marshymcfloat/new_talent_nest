import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobWhereUniqueInputObjectSchema } from './JobWhereUniqueInput.schema';
import { JobUpdateWithoutCompanyInputObjectSchema } from './JobUpdateWithoutCompanyInput.schema';
import { JobUncheckedUpdateWithoutCompanyInputObjectSchema } from './JobUncheckedUpdateWithoutCompanyInput.schema';
import { JobCreateWithoutCompanyInputObjectSchema } from './JobCreateWithoutCompanyInput.schema';
import { JobUncheckedCreateWithoutCompanyInputObjectSchema } from './JobUncheckedCreateWithoutCompanyInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => JobWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => JobUpdateWithoutCompanyInputObjectSchema), z.lazy(() => JobUncheckedUpdateWithoutCompanyInputObjectSchema)]),
  create: z.union([z.lazy(() => JobCreateWithoutCompanyInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutCompanyInputObjectSchema)])
}).strict();
export const JobUpsertWithWhereUniqueWithoutCompanyInputObjectSchema: z.ZodType<Prisma.JobUpsertWithWhereUniqueWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUpsertWithWhereUniqueWithoutCompanyInput>;
export const JobUpsertWithWhereUniqueWithoutCompanyInputObjectZodSchema = makeSchema();
