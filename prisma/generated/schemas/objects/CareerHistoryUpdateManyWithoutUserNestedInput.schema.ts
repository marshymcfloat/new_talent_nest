import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CareerHistoryCreateWithoutUserInputObjectSchema } from './CareerHistoryCreateWithoutUserInput.schema';
import { CareerHistoryUncheckedCreateWithoutUserInputObjectSchema } from './CareerHistoryUncheckedCreateWithoutUserInput.schema';
import { CareerHistoryCreateOrConnectWithoutUserInputObjectSchema } from './CareerHistoryCreateOrConnectWithoutUserInput.schema';
import { CareerHistoryUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './CareerHistoryUpsertWithWhereUniqueWithoutUserInput.schema';
import { CareerHistoryCreateManyUserInputEnvelopeObjectSchema } from './CareerHistoryCreateManyUserInputEnvelope.schema';
import { CareerHistoryWhereUniqueInputObjectSchema } from './CareerHistoryWhereUniqueInput.schema';
import { CareerHistoryUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './CareerHistoryUpdateWithWhereUniqueWithoutUserInput.schema';
import { CareerHistoryUpdateManyWithWhereWithoutUserInputObjectSchema } from './CareerHistoryUpdateManyWithWhereWithoutUserInput.schema';
import { CareerHistoryScalarWhereInputObjectSchema } from './CareerHistoryScalarWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => CareerHistoryCreateWithoutUserInputObjectSchema), z.lazy(() => CareerHistoryCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CareerHistoryUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CareerHistoryUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CareerHistoryCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CareerHistoryCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CareerHistoryUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CareerHistoryUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CareerHistoryCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CareerHistoryWhereUniqueInputObjectSchema), z.lazy(() => CareerHistoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CareerHistoryWhereUniqueInputObjectSchema), z.lazy(() => CareerHistoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CareerHistoryWhereUniqueInputObjectSchema), z.lazy(() => CareerHistoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CareerHistoryWhereUniqueInputObjectSchema), z.lazy(() => CareerHistoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CareerHistoryUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CareerHistoryUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CareerHistoryUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => CareerHistoryUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CareerHistoryScalarWhereInputObjectSchema), z.lazy(() => CareerHistoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CareerHistoryUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.CareerHistoryUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryUpdateManyWithoutUserNestedInput>;
export const CareerHistoryUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
