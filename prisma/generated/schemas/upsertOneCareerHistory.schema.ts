import { z } from 'zod';
import { CareerHistorySelectObjectSchema } from './objects/CareerHistorySelect.schema';
import { CareerHistoryIncludeObjectSchema } from './objects/CareerHistoryInclude.schema';
import { CareerHistoryWhereUniqueInputObjectSchema } from './objects/CareerHistoryWhereUniqueInput.schema';
import { CareerHistoryCreateInputObjectSchema } from './objects/CareerHistoryCreateInput.schema';
import { CareerHistoryUncheckedCreateInputObjectSchema } from './objects/CareerHistoryUncheckedCreateInput.schema';
import { CareerHistoryUpdateInputObjectSchema } from './objects/CareerHistoryUpdateInput.schema';
import { CareerHistoryUncheckedUpdateInputObjectSchema } from './objects/CareerHistoryUncheckedUpdateInput.schema';

export const CareerHistoryUpsertSchema = z.object({ select: CareerHistorySelectObjectSchema.optional(), include: CareerHistoryIncludeObjectSchema.optional(), where: CareerHistoryWhereUniqueInputObjectSchema, create: z.union([ CareerHistoryCreateInputObjectSchema, CareerHistoryUncheckedCreateInputObjectSchema ]), update: z.union([ CareerHistoryUpdateInputObjectSchema, CareerHistoryUncheckedUpdateInputObjectSchema ])  })