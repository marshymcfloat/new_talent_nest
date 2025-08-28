import { z } from 'zod';
import { EmployerQuestionSelectObjectSchema } from './objects/EmployerQuestionSelect.schema';
import { EmployerQuestionCreateManyInputObjectSchema } from './objects/EmployerQuestionCreateManyInput.schema';

export const EmployerQuestionCreateManyAndReturnSchema = z.object({ select: EmployerQuestionSelectObjectSchema.optional(), data: z.union([ EmployerQuestionCreateManyInputObjectSchema, z.array(EmployerQuestionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()