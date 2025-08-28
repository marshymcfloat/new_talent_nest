import { z } from 'zod';
import { EmployerQuestionSelectObjectSchema } from './objects/EmployerQuestionSelect.schema';
import { EmployerQuestionIncludeObjectSchema } from './objects/EmployerQuestionInclude.schema';
import { EmployerQuestionCreateInputObjectSchema } from './objects/EmployerQuestionCreateInput.schema';
import { EmployerQuestionUncheckedCreateInputObjectSchema } from './objects/EmployerQuestionUncheckedCreateInput.schema';

export const EmployerQuestionCreateOneSchema = z.object({ select: EmployerQuestionSelectObjectSchema.optional(), include: EmployerQuestionIncludeObjectSchema.optional(), data: z.union([EmployerQuestionCreateInputObjectSchema, EmployerQuestionUncheckedCreateInputObjectSchema])  })