import { z } from 'zod';

import { QuestionTypeSchema } from '../../enums/QuestionType.schema';
// prettier-ignore
export const CompanyQuestionResultSchema = z.object({
    id: z.string(),
    text: z.string(),
    type: QuestionTypeSchema,
    options: z.array(z.string()),
    companyId: z.string(),
    company: z.unknown(),
    jobs: z.array(z.unknown()),
    answers: z.array(z.unknown()),
    isArchived: z.boolean()
}).strict();

export type CompanyQuestionResultType = z.infer<typeof CompanyQuestionResultSchema>;
