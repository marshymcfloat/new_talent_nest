import { z } from 'zod';
import { EmployerQuestionUpdateManyMutationInputObjectSchema } from './objects/EmployerQuestionUpdateManyMutationInput.schema';
import { EmployerQuestionWhereInputObjectSchema } from './objects/EmployerQuestionWhereInput.schema';

export const EmployerQuestionUpdateManySchema = z.object({ data: EmployerQuestionUpdateManyMutationInputObjectSchema, where: EmployerQuestionWhereInputObjectSchema.optional()  })