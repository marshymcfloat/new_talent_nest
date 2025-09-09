import { z } from 'zod';
import { CompanyQuestionSelectObjectSchema } from './objects/CompanyQuestionSelect.schema';
import { CompanyQuestionIncludeObjectSchema } from './objects/CompanyQuestionInclude.schema';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './objects/CompanyQuestionWhereUniqueInput.schema';
import { CompanyQuestionCreateInputObjectSchema } from './objects/CompanyQuestionCreateInput.schema';
import { CompanyQuestionUncheckedCreateInputObjectSchema } from './objects/CompanyQuestionUncheckedCreateInput.schema';
import { CompanyQuestionUpdateInputObjectSchema } from './objects/CompanyQuestionUpdateInput.schema';
import { CompanyQuestionUncheckedUpdateInputObjectSchema } from './objects/CompanyQuestionUncheckedUpdateInput.schema';

export const CompanyQuestionUpsertSchema = z.object({ select: CompanyQuestionSelectObjectSchema.optional(), include: CompanyQuestionIncludeObjectSchema.optional(), where: CompanyQuestionWhereUniqueInputObjectSchema, create: z.union([ CompanyQuestionCreateInputObjectSchema, CompanyQuestionUncheckedCreateInputObjectSchema ]), update: z.union([ CompanyQuestionUpdateInputObjectSchema, CompanyQuestionUncheckedUpdateInputObjectSchema ])  })