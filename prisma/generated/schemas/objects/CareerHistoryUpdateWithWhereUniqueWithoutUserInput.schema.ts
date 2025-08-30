import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CareerHistoryWhereUniqueInputObjectSchema } from './CareerHistoryWhereUniqueInput.schema';
import { CareerHistoryUpdateWithoutUserInputObjectSchema } from './CareerHistoryUpdateWithoutUserInput.schema';
import { CareerHistoryUncheckedUpdateWithoutUserInputObjectSchema } from './CareerHistoryUncheckedUpdateWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => CareerHistoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CareerHistoryUpdateWithoutUserInputObjectSchema), z.lazy(() => CareerHistoryUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const CareerHistoryUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CareerHistoryUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryUpdateWithWhereUniqueWithoutUserInput>;
export const CareerHistoryUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
