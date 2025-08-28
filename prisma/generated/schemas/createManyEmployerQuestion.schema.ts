import { z } from 'zod';
import { EmployerQuestionCreateManyInputObjectSchema } from './objects/EmployerQuestionCreateManyInput.schema';

export const EmployerQuestionCreateManySchema = z.object({ data: z.union([ EmployerQuestionCreateManyInputObjectSchema, z.array(EmployerQuestionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })