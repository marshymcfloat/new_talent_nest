import { z } from 'zod';
import { CompanyQuestionSelectObjectSchema } from './objects/CompanyQuestionSelect.schema';
import { CompanyQuestionIncludeObjectSchema } from './objects/CompanyQuestionInclude.schema';
import { CompanyQuestionCreateInputObjectSchema } from './objects/CompanyQuestionCreateInput.schema';
import { CompanyQuestionUncheckedCreateInputObjectSchema } from './objects/CompanyQuestionUncheckedCreateInput.schema';

export const CompanyQuestionCreateOneSchema = z.object({ select: CompanyQuestionSelectObjectSchema.optional(), include: CompanyQuestionIncludeObjectSchema.optional(), data: z.union([CompanyQuestionCreateInputObjectSchema, CompanyQuestionUncheckedCreateInputObjectSchema])  })