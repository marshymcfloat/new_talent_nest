import { z } from 'zod';
import { CompanyQuestionWhereInputObjectSchema } from './objects/CompanyQuestionWhereInput.schema';

export const CompanyQuestionDeleteManySchema = z.object({ where: CompanyQuestionWhereInputObjectSchema.optional()  })