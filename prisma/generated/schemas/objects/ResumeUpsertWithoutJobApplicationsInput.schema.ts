import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeUpdateWithoutJobApplicationsInputObjectSchema } from './ResumeUpdateWithoutJobApplicationsInput.schema';
import { ResumeUncheckedUpdateWithoutJobApplicationsInputObjectSchema } from './ResumeUncheckedUpdateWithoutJobApplicationsInput.schema';
import { ResumeCreateWithoutJobApplicationsInputObjectSchema } from './ResumeCreateWithoutJobApplicationsInput.schema';
import { ResumeUncheckedCreateWithoutJobApplicationsInputObjectSchema } from './ResumeUncheckedCreateWithoutJobApplicationsInput.schema';
import { ResumeWhereInputObjectSchema } from './ResumeWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  update: z.union([z.lazy(() => ResumeUpdateWithoutJobApplicationsInputObjectSchema), z.lazy(() => ResumeUncheckedUpdateWithoutJobApplicationsInputObjectSchema)]),
  create: z.union([z.lazy(() => ResumeCreateWithoutJobApplicationsInputObjectSchema), z.lazy(() => ResumeUncheckedCreateWithoutJobApplicationsInputObjectSchema)]),
  where: z.lazy(() => ResumeWhereInputObjectSchema).optional()
}).strict();
export const ResumeUpsertWithoutJobApplicationsInputObjectSchema: z.ZodType<Prisma.ResumeUpsertWithoutJobApplicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeUpsertWithoutJobApplicationsInput>;
export const ResumeUpsertWithoutJobApplicationsInputObjectZodSchema = makeSchema();
