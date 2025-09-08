import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeCreateWithoutJobApplicationsInputObjectSchema } from './ResumeCreateWithoutJobApplicationsInput.schema';
import { ResumeUncheckedCreateWithoutJobApplicationsInputObjectSchema } from './ResumeUncheckedCreateWithoutJobApplicationsInput.schema';
import { ResumeCreateOrConnectWithoutJobApplicationsInputObjectSchema } from './ResumeCreateOrConnectWithoutJobApplicationsInput.schema';
import { ResumeUpsertWithoutJobApplicationsInputObjectSchema } from './ResumeUpsertWithoutJobApplicationsInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeUpdateToOneWithWhereWithoutJobApplicationsInputObjectSchema } from './ResumeUpdateToOneWithWhereWithoutJobApplicationsInput.schema';
import { ResumeUpdateWithoutJobApplicationsInputObjectSchema } from './ResumeUpdateWithoutJobApplicationsInput.schema';
import { ResumeUncheckedUpdateWithoutJobApplicationsInputObjectSchema } from './ResumeUncheckedUpdateWithoutJobApplicationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResumeCreateWithoutJobApplicationsInputObjectSchema), z.lazy(() => ResumeUncheckedCreateWithoutJobApplicationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ResumeCreateOrConnectWithoutJobApplicationsInputObjectSchema).optional(),
  upsert: z.lazy(() => ResumeUpsertWithoutJobApplicationsInputObjectSchema).optional(),
  connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ResumeUpdateToOneWithWhereWithoutJobApplicationsInputObjectSchema), z.lazy(() => ResumeUpdateWithoutJobApplicationsInputObjectSchema), z.lazy(() => ResumeUncheckedUpdateWithoutJobApplicationsInputObjectSchema)]).optional()
}).strict();
export const ResumeUpdateOneRequiredWithoutJobApplicationsNestedInputObjectSchema: z.ZodType<Prisma.ResumeUpdateOneRequiredWithoutJobApplicationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeUpdateOneRequiredWithoutJobApplicationsNestedInput>;
export const ResumeUpdateOneRequiredWithoutJobApplicationsNestedInputObjectZodSchema = makeSchema();
