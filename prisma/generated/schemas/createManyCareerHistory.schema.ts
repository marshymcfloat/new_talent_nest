import { z } from 'zod';
import { CareerHistoryCreateManyInputObjectSchema } from './objects/CareerHistoryCreateManyInput.schema';

export const CareerHistoryCreateManySchema = z.object({ data: z.union([ CareerHistoryCreateManyInputObjectSchema, z.array(CareerHistoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })