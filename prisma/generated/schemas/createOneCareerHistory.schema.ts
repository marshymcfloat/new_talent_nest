import { z } from 'zod';
import { CareerHistorySelectObjectSchema } from './objects/CareerHistorySelect.schema';
import { CareerHistoryIncludeObjectSchema } from './objects/CareerHistoryInclude.schema';
import { CareerHistoryCreateInputObjectSchema } from './objects/CareerHistoryCreateInput.schema';
import { CareerHistoryUncheckedCreateInputObjectSchema } from './objects/CareerHistoryUncheckedCreateInput.schema';

export const CareerHistoryCreateOneSchema = z.object({ select: CareerHistorySelectObjectSchema.optional(), include: CareerHistoryIncludeObjectSchema.optional(), data: z.union([CareerHistoryCreateInputObjectSchema, CareerHistoryUncheckedCreateInputObjectSchema])  })