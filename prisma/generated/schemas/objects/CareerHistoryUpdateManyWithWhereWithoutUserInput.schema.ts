import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CareerHistoryScalarWhereInputObjectSchema } from './CareerHistoryScalarWhereInput.schema';
import { CareerHistoryUpdateManyMutationInputObjectSchema } from './CareerHistoryUpdateManyMutationInput.schema';
import { CareerHistoryUncheckedUpdateManyWithoutUserInputObjectSchema } from './CareerHistoryUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CareerHistoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CareerHistoryUpdateManyMutationInputObjectSchema), z.lazy(() => CareerHistoryUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const CareerHistoryUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.CareerHistoryUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryUpdateManyWithWhereWithoutUserInput>;
export const CareerHistoryUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
