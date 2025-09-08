import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeWhereInputObjectSchema } from './ResumeWhereInput.schema';
import { ResumeUpdateWithoutJobApplicationsInputObjectSchema } from './ResumeUpdateWithoutJobApplicationsInput.schema';
import { ResumeUncheckedUpdateWithoutJobApplicationsInputObjectSchema } from './ResumeUncheckedUpdateWithoutJobApplicationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResumeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ResumeUpdateWithoutJobApplicationsInputObjectSchema), z.lazy(() => ResumeUncheckedUpdateWithoutJobApplicationsInputObjectSchema)])
}).strict();
export const ResumeUpdateToOneWithWhereWithoutJobApplicationsInputObjectSchema: z.ZodType<Prisma.ResumeUpdateToOneWithWhereWithoutJobApplicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeUpdateToOneWithWhereWithoutJobApplicationsInput>;
export const ResumeUpdateToOneWithWhereWithoutJobApplicationsInputObjectZodSchema = makeSchema();
