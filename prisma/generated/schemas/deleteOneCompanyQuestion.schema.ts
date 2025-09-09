import { z } from 'zod';
import { CompanyQuestionSelectObjectSchema } from './objects/CompanyQuestionSelect.schema';
import { CompanyQuestionIncludeObjectSchema } from './objects/CompanyQuestionInclude.schema';
import { CompanyQuestionWhereUniqueInputObjectSchema } from './objects/CompanyQuestionWhereUniqueInput.schema';

export const CompanyQuestionDeleteOneSchema = z.object({ select: CompanyQuestionSelectObjectSchema.optional(), include: CompanyQuestionIncludeObjectSchema.optional(), where: CompanyQuestionWhereUniqueInputObjectSchema  })