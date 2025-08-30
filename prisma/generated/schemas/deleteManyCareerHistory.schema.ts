import { z } from 'zod';
import { CareerHistoryWhereInputObjectSchema } from './objects/CareerHistoryWhereInput.schema';

export const CareerHistoryDeleteManySchema = z.object({ where: CareerHistoryWhereInputObjectSchema.optional()  })