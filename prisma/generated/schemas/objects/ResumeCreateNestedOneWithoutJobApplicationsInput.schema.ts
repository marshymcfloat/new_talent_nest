import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeCreateWithoutJobApplicationsInputObjectSchema } from './ResumeCreateWithoutJobApplicationsInput.schema';
import { ResumeUncheckedCreateWithoutJobApplicationsInputObjectSchema } from './ResumeUncheckedCreateWithoutJobApplicationsInput.schema';
import { ResumeCreateOrConnectWithoutJobApplicationsInputObjectSchema } from './ResumeCreateOrConnectWithoutJobApplicationsInput.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => ResumeCreateWithoutJobApplicationsInputObjectSchema), z.lazy(() => ResumeUncheckedCreateWithoutJobApplicationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ResumeCreateOrConnectWithoutJobApplicationsInputObjectSchema).optional(),
  connect: z.lazy(() => ResumeWhereUniqueInputObjectSchema).optional()
}).strict();
export const ResumeCreateNestedOneWithoutJobApplicationsInputObjectSchema: z.ZodType<Prisma.ResumeCreateNestedOneWithoutJobApplicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCreateNestedOneWithoutJobApplicationsInput>;
export const ResumeCreateNestedOneWithoutJobApplicationsInputObjectZodSchema = makeSchema();
