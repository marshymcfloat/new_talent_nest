import { z } from 'zod';
import { CareerHistorySelectObjectSchema } from './objects/CareerHistorySelect.schema';
import { CareerHistoryUpdateManyMutationInputObjectSchema } from './objects/CareerHistoryUpdateManyMutationInput.schema';
import { CareerHistoryWhereInputObjectSchema } from './objects/CareerHistoryWhereInput.schema';

export const CareerHistoryUpdateManyAndReturnSchema = z.object({ select: CareerHistorySelectObjectSchema.optional(), data: CareerHistoryUpdateManyMutationInputObjectSchema, where: CareerHistoryWhereInputObjectSchema.optional()  }).strict()