import { z } from 'zod';
import { CompanyQuestionSelectObjectSchema } from './objects/CompanyQuestionSelect.schema';
import { CompanyQuestionCreateManyInputObjectSchema } from './objects/CompanyQuestionCreateManyInput.schema';

export const CompanyQuestionCreateManyAndReturnSchema = z.object({ select: CompanyQuestionSelectObjectSchema.optional(), data: z.union([ CompanyQuestionCreateManyInputObjectSchema, z.array(CompanyQuestionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()