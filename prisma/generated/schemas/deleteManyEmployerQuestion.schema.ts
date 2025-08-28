import { z } from 'zod';
import { EmployerQuestionWhereInputObjectSchema } from './objects/EmployerQuestionWhereInput.schema';

export const EmployerQuestionDeleteManySchema = z.object({ where: EmployerQuestionWhereInputObjectSchema.optional()  })