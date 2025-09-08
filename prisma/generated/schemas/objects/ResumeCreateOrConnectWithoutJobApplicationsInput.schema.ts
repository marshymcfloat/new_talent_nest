import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeCreateWithoutJobApplicationsInputObjectSchema } from './ResumeCreateWithoutJobApplicationsInput.schema';
import { ResumeUncheckedCreateWithoutJobApplicationsInputObjectSchema } from './ResumeUncheckedCreateWithoutJobApplicationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ResumeCreateWithoutJobApplicationsInputObjectSchema), z.lazy(() => ResumeUncheckedCreateWithoutJobApplicationsInputObjectSchema)])
}).strict();
export const ResumeCreateOrConnectWithoutJobApplicationsInputObjectSchema: z.ZodType<Prisma.ResumeCreateOrConnectWithoutJobApplicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCreateOrConnectWithoutJobApplicationsInput>;
export const ResumeCreateOrConnectWithoutJobApplicationsInputObjectZodSchema = makeSchema();
