import { z } from 'zod';

import { QuestionTypeSchema } from '../../enums/QuestionType.schema';
// prettier-ignore
export const EmployerQuestionModelSchema = z.object({
    id: z.string(),
    text: z.string(),
    type: QuestionTypeSchema,
    isRequired: z.boolean(),
    options: z.array(z.string()),
    jobId: z.string(),
    Job: z.unknown(),
    answers: z.array(z.unknown())
}).strict();

export type EmployerQuestionModelType = z.infer<typeof EmployerQuestionModelSchema>;
