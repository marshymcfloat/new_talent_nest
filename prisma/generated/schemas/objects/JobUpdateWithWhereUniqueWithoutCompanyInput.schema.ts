import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobWhereUniqueInputObjectSchema } from './JobWhereUniqueInput.schema';
import { JobUpdateWithoutCompanyInputObjectSchema } from './JobUpdateWithoutCompanyInput.schema';
import { JobUncheckedUpdateWithoutCompanyInputObjectSchema } from './JobUncheckedUpdateWithoutCompanyInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => JobWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => JobUpdateWithoutCompanyInputObjectSchema), z.lazy(() => JobUncheckedUpdateWithoutCompanyInputObjectSchema)])
}).strict();
export const JobUpdateWithWhereUniqueWithoutCompanyInputObjectSchema: z.ZodType<Prisma.JobUpdateWithWhereUniqueWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUpdateWithWhereUniqueWithoutCompanyInput>;
export const JobUpdateWithWhereUniqueWithoutCompanyInputObjectZodSchema = makeSchema();
