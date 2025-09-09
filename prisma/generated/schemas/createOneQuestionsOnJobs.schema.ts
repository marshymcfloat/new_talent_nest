import { z } from 'zod';
import { QuestionsOnJobsSelectObjectSchema } from './objects/QuestionsOnJobsSelect.schema';
import { QuestionsOnJobsIncludeObjectSchema } from './objects/QuestionsOnJobsInclude.schema';
import { QuestionsOnJobsCreateInputObjectSchema } from './objects/QuestionsOnJobsCreateInput.schema';
import { QuestionsOnJobsUncheckedCreateInputObjectSchema } from './objects/QuestionsOnJobsUncheckedCreateInput.schema';

export const QuestionsOnJobsCreateOneSchema = z.object({ select: QuestionsOnJobsSelectObjectSchema.optional(), include: QuestionsOnJobsIncludeObjectSchema.optional(), data: z.union([QuestionsOnJobsCreateInputObjectSchema, QuestionsOnJobsUncheckedCreateInputObjectSchema])  })