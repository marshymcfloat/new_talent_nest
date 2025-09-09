import { z } from 'zod';
import { CompanyQuestionCreateManyInputObjectSchema } from './objects/CompanyQuestionCreateManyInput.schema';

export const CompanyQuestionCreateManySchema = z.object({ data: z.union([ CompanyQuestionCreateManyInputObjectSchema, z.array(CompanyQuestionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })