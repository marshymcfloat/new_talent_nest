import { z } from 'zod';
import { CareerHistoryUpdateManyMutationInputObjectSchema } from './objects/CareerHistoryUpdateManyMutationInput.schema';
import { CareerHistoryWhereInputObjectSchema } from './objects/CareerHistoryWhereInput.schema';

export const CareerHistoryUpdateManySchema = z.object({ data: CareerHistoryUpdateManyMutationInputObjectSchema, where: CareerHistoryWhereInputObjectSchema.optional()  })