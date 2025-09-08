import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CareerHistoryWhereUniqueInputObjectSchema } from './CareerHistoryWhereUniqueInput.schema';
import { CareerHistoryCreateWithoutUserInputObjectSchema } from './CareerHistoryCreateWithoutUserInput.schema';
import { CareerHistoryUncheckedCreateWithoutUserInputObjectSchema } from './CareerHistoryUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CareerHistoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CareerHistoryCreateWithoutUserInputObjectSchema), z.lazy(() => CareerHistoryUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CareerHistoryCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.CareerHistoryCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryCreateOrConnectWithoutUserInput>;
export const CareerHistoryCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
