import { z } from 'zod';
import { CompanyQuestionUpdateManyMutationInputObjectSchema } from './objects/CompanyQuestionUpdateManyMutationInput.schema';
import { CompanyQuestionWhereInputObjectSchema } from './objects/CompanyQuestionWhereInput.schema';

export const CompanyQuestionUpdateManySchema = z.object({ data: CompanyQuestionUpdateManyMutationInputObjectSchema, where: CompanyQuestionWhereInputObjectSchema.optional()  })