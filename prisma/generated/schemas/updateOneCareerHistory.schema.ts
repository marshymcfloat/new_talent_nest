import { z } from 'zod';
import { CareerHistorySelectObjectSchema } from './objects/CareerHistorySelect.schema';
import { CareerHistoryIncludeObjectSchema } from './objects/CareerHistoryInclude.schema';
import { CareerHistoryUpdateInputObjectSchema } from './objects/CareerHistoryUpdateInput.schema';
import { CareerHistoryUncheckedUpdateInputObjectSchema } from './objects/CareerHistoryUncheckedUpdateInput.schema';
import { CareerHistoryWhereUniqueInputObjectSchema } from './objects/CareerHistoryWhereUniqueInput.schema';

export const CareerHistoryUpdateOneSchema = z.object({ select: CareerHistorySelectObjectSchema.optional(), include: CareerHistoryIncludeObjectSchema.optional(), data: z.union([CareerHistoryUpdateInputObjectSchema, CareerHistoryUncheckedUpdateInputObjectSchema]), where: CareerHistoryWhereUniqueInputObjectSchema  })