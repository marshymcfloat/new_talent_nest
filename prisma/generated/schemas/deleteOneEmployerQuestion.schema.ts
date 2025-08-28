import { z } from 'zod';
import { EmployerQuestionSelectObjectSchema } from './objects/EmployerQuestionSelect.schema';
import { EmployerQuestionIncludeObjectSchema } from './objects/EmployerQuestionInclude.schema';
import { EmployerQuestionWhereUniqueInputObjectSchema } from './objects/EmployerQuestionWhereUniqueInput.schema';

export const EmployerQuestionDeleteOneSchema = z.object({ select: EmployerQuestionSelectObjectSchema.optional(), include: EmployerQuestionIncludeObjectSchema.optional(), where: EmployerQuestionWhereUniqueInputObjectSchema  })