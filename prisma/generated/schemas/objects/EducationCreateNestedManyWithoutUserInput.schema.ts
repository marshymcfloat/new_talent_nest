import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EducationCreateWithoutUserInputObjectSchema } from './EducationCreateWithoutUserInput.schema';
import { EducationUncheckedCreateWithoutUserInputObjectSchema } from './EducationUncheckedCreateWithoutUserInput.schema';
import { EducationCreateOrConnectWithoutUserInputObjectSchema } from './EducationCreateOrConnectWithoutUserInput.schema';
import { EducationCreateManyUserInputEnvelopeObjectSchema } from './EducationCreateManyUserInputEnvelope.schema';
import { EducationWhereUniqueInputObjectSchema } from './EducationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EducationCreateWithoutUserInputObjectSchema), z.lazy(() => EducationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => EducationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => EducationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EducationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => EducationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EducationCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EducationWhereUniqueInputObjectSchema), z.lazy(() => EducationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EducationCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.EducationCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationCreateNestedManyWithoutUserInput>;
export const EducationCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
