import { z } from 'zod';
import { EmployerQuestionSelectObjectSchema } from './objects/EmployerQuestionSelect.schema';
import { EmployerQuestionIncludeObjectSchema } from './objects/EmployerQuestionInclude.schema';
import { EmployerQuestionWhereUniqueInputObjectSchema } from './objects/EmployerQuestionWhereUniqueInput.schema';
import { EmployerQuestionCreateInputObjectSchema } from './objects/EmployerQuestionCreateInput.schema';
import { EmployerQuestionUncheckedCreateInputObjectSchema } from './objects/EmployerQuestionUncheckedCreateInput.schema';
import { EmployerQuestionUpdateInputObjectSchema } from './objects/EmployerQuestionUpdateInput.schema';
import { EmployerQuestionUncheckedUpdateInputObjectSchema } from './objects/EmployerQuestionUncheckedUpdateInput.schema';

export const EmployerQuestionUpsertSchema = z.object({ select: EmployerQuestionSelectObjectSchema.optional(), include: EmployerQuestionIncludeObjectSchema.optional(), where: EmployerQuestionWhereUniqueInputObjectSchema, create: z.union([ EmployerQuestionCreateInputObjectSchema, EmployerQuestionUncheckedCreateInputObjectSchema ]), update: z.union([ EmployerQuestionUpdateInputObjectSchema, EmployerQuestionUncheckedUpdateInputObjectSchema ])  })