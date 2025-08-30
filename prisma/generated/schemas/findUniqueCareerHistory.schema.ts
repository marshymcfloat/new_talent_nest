import { z } from 'zod';
import { CareerHistorySelectObjectSchema } from './objects/CareerHistorySelect.schema';
import { CareerHistoryIncludeObjectSchema } from './objects/CareerHistoryInclude.schema';
import { CareerHistoryWhereUniqueInputObjectSchema } from './objects/CareerHistoryWhereUniqueInput.schema';

export const CareerHistoryFindUniqueSchema = z.object({ select: CareerHistorySelectObjectSchema.optional(), include: CareerHistoryIncludeObjectSchema.optional(), where: CareerHistoryWhereUniqueInputObjectSchema })