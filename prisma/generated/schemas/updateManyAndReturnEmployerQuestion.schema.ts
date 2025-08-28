import { z } from 'zod';
import { EmployerQuestionSelectObjectSchema } from './objects/EmployerQuestionSelect.schema';
import { EmployerQuestionUpdateManyMutationInputObjectSchema } from './objects/EmployerQuestionUpdateManyMutationInput.schema';
import { EmployerQuestionWhereInputObjectSchema } from './objects/EmployerQuestionWhereInput.schema';

export const EmployerQuestionUpdateManyAndReturnSchema = z.object({ select: EmployerQuestionSelectObjectSchema.optional(), data: EmployerQuestionUpdateManyMutationInputObjectSchema, where: EmployerQuestionWhereInputObjectSchema.optional()  }).strict()