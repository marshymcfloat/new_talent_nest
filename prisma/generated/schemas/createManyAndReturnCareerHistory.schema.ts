import { z } from 'zod';
import { CareerHistorySelectObjectSchema } from './objects/CareerHistorySelect.schema';
import { CareerHistoryCreateManyInputObjectSchema } from './objects/CareerHistoryCreateManyInput.schema';

export const CareerHistoryCreateManyAndReturnSchema = z.object({ select: CareerHistorySelectObjectSchema.optional(), data: z.union([ CareerHistoryCreateManyInputObjectSchema, z.array(CareerHistoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()