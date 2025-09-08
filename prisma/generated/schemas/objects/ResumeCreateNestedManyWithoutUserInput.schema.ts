import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeCreateWithoutUserInputObjectSchema } from './ResumeCreateWithoutUserInput.schema';
import { ResumeUncheckedCreateWithoutUserInputObjectSchema } from './ResumeUncheckedCreateWithoutUserInput.schema';
import { ResumeCreateOrConnectWithoutUserInputObjectSchema } from './ResumeCreateOrConnectWithoutUserInput.schema';
import { ResumeCreateManyUserInputEnvelopeObjectSchema } from './ResumeCreateManyUserInputEnvelope.schema';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResumeCreateWithoutUserInputObjectSchema), z.lazy(() => ResumeCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ResumeUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ResumeUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResumeCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ResumeCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResumeCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ResumeWhereUniqueInputObjectSchema), z.lazy(() => ResumeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ResumeCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ResumeCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCreateNestedManyWithoutUserInput>;
export const ResumeCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
