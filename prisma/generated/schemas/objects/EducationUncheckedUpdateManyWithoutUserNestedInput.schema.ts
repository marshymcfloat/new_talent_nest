import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EducationCreateWithoutUserInputObjectSchema } from './EducationCreateWithoutUserInput.schema';
import { EducationUncheckedCreateWithoutUserInputObjectSchema } from './EducationUncheckedCreateWithoutUserInput.schema';
import { EducationCreateOrConnectWithoutUserInputObjectSchema } from './EducationCreateOrConnectWithoutUserInput.schema';
import { EducationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './EducationUpsertWithWhereUniqueWithoutUserInput.schema';
import { EducationCreateManyUserInputEnvelopeObjectSchema } from './EducationCreateManyUserInputEnvelope.schema';
import { EducationWhereUniqueInputObjectSchema } from './EducationWhereUniqueInput.schema';
import { EducationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './EducationUpdateWithWhereUniqueWithoutUserInput.schema';
import { EducationUpdateManyWithWhereWithoutUserInputObjectSchema } from './EducationUpdateManyWithWhereWithoutUserInput.schema';
import { EducationScalarWhereInputObjectSchema } from './EducationScalarWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => EducationCreateWithoutUserInputObjectSchema), z.lazy(() => EducationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => EducationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => EducationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EducationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => EducationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EducationUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => EducationUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EducationCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EducationWhereUniqueInputObjectSchema), z.lazy(() => EducationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EducationWhereUniqueInputObjectSchema), z.lazy(() => EducationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EducationWhereUniqueInputObjectSchema), z.lazy(() => EducationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EducationWhereUniqueInputObjectSchema), z.lazy(() => EducationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EducationUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => EducationUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EducationUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => EducationUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EducationScalarWhereInputObjectSchema), z.lazy(() => EducationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EducationUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.EducationUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationUncheckedUpdateManyWithoutUserNestedInput>;
export const EducationUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
