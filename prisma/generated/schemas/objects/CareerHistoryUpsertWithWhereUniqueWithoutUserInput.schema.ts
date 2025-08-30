import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CareerHistoryWhereUniqueInputObjectSchema } from './CareerHistoryWhereUniqueInput.schema';
import { CareerHistoryUpdateWithoutUserInputObjectSchema } from './CareerHistoryUpdateWithoutUserInput.schema';
import { CareerHistoryUncheckedUpdateWithoutUserInputObjectSchema } from './CareerHistoryUncheckedUpdateWithoutUserInput.schema';
import { CareerHistoryCreateWithoutUserInputObjectSchema } from './CareerHistoryCreateWithoutUserInput.schema';
import { CareerHistoryUncheckedCreateWithoutUserInputObjectSchema } from './CareerHistoryUncheckedCreateWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => CareerHistoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CareerHistoryUpdateWithoutUserInputObjectSchema), z.lazy(() => CareerHistoryUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => CareerHistoryCreateWithoutUserInputObjectSchema), z.lazy(() => CareerHistoryUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CareerHistoryUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CareerHistoryUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryUpsertWithWhereUniqueWithoutUserInput>;
export const CareerHistoryUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
