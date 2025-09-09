import { z } from 'zod';
import { CompanyQuestionSelectObjectSchema } from './objects/CompanyQuestionSelect.schema';
import { CompanyQuestionUpdateManyMutationInputObjectSchema } from './objects/CompanyQuestionUpdateManyMutationInput.schema';
import { CompanyQuestionWhereInputObjectSchema } from './objects/CompanyQuestionWhereInput.schema';

export const CompanyQuestionUpdateManyAndReturnSchema = z.object({ select: CompanyQuestionSelectObjectSchema.optional(), data: CompanyQuestionUpdateManyMutationInputObjectSchema, where: CompanyQuestionWhereInputObjectSchema.optional()  }).strict()