import { z } from 'zod';
import { EmployerQuestionSelectObjectSchema } from './objects/EmployerQuestionSelect.schema';
import { EmployerQuestionIncludeObjectSchema } from './objects/EmployerQuestionInclude.schema';
import { EmployerQuestionUpdateInputObjectSchema } from './objects/EmployerQuestionUpdateInput.schema';
import { EmployerQuestionUncheckedUpdateInputObjectSchema } from './objects/EmployerQuestionUncheckedUpdateInput.schema';
import { EmployerQuestionWhereUniqueInputObjectSchema } from './objects/EmployerQuestionWhereUniqueInput.schema';

export const EmployerQuestionUpdateOneSchema = z.object({ select: EmployerQuestionSelectObjectSchema.optional(), include: EmployerQuestionIncludeObjectSchema.optional(), data: z.union([EmployerQuestionUpdateInputObjectSchema, EmployerQuestionUncheckedUpdateInputObjectSchema]), where: EmployerQuestionWhereUniqueInputObjectSchema  })