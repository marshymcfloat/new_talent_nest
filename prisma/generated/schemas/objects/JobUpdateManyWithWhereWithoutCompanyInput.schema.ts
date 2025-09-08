import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobScalarWhereInputObjectSchema } from './JobScalarWhereInput.schema';
import { JobUpdateManyMutationInputObjectSchema } from './JobUpdateManyMutationInput.schema';
import { JobUncheckedUpdateManyWithoutCompanyInputObjectSchema } from './JobUncheckedUpdateManyWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => JobScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => JobUpdateManyMutationInputObjectSchema), z.lazy(() => JobUncheckedUpdateManyWithoutCompanyInputObjectSchema)])
}).strict();
export const JobUpdateManyWithWhereWithoutCompanyInputObjectSchema: z.ZodType<Prisma.JobUpdateManyWithWhereWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUpdateManyWithWhereWithoutCompanyInput>;
export const JobUpdateManyWithWhereWithoutCompanyInputObjectZodSchema = makeSchema();
