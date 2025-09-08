import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CareerHistoryCreateWithoutUserInputObjectSchema } from './CareerHistoryCreateWithoutUserInput.schema';
import { CareerHistoryUncheckedCreateWithoutUserInputObjectSchema } from './CareerHistoryUncheckedCreateWithoutUserInput.schema';
import { CareerHistoryCreateOrConnectWithoutUserInputObjectSchema } from './CareerHistoryCreateOrConnectWithoutUserInput.schema';
import { CareerHistoryCreateManyUserInputEnvelopeObjectSchema } from './CareerHistoryCreateManyUserInputEnvelope.schema';
import { CareerHistoryWhereUniqueInputObjectSchema } from './CareerHistoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CareerHistoryCreateWithoutUserInputObjectSchema), z.lazy(() => CareerHistoryCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CareerHistoryUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CareerHistoryUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CareerHistoryCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CareerHistoryCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CareerHistoryCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CareerHistoryWhereUniqueInputObjectSchema), z.lazy(() => CareerHistoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CareerHistoryCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.CareerHistoryCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryCreateNestedManyWithoutUserInput>;
export const CareerHistoryCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
