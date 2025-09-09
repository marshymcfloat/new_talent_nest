import { z } from 'zod';
import { CompanyQuestionSelectObjectSchema } from './objects/CompanyQuestionSelect.schema';
import { CompanyQuestionIncludeObjectSchema } from './objects/CompanyQuestionInclude.schema';
import { CompanyQuestionUpdateInputObjectSchema } from './objects/CompanyQuestionUpdateInput.schema';
import { CompanyQuestionUncheckedUpdateInputObjectSchema } from './objects/CompanyQuestionUncheckedUpdateInput.schema';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './objects/CompanyQuestionWhereUniqueInput.schema';

export const CompanyQuestionUpdateOneSchema = z.object({ select: CompanyQuestionSelectObjectSchema.optional(), include: CompanyQuestionIncludeObjectSchema.optional(), data: z.union([CompanyQuestionUpdateInputObjectSchema, CompanyQuestionUncheckedUpdateInputObjectSchema]), where: CompanyQuestionWhereUniqueInputObjectSchema  })