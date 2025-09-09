import { z } from 'zod';
import { QuestionsOnJobsSelectObjectSchema } from './objects/QuestionsOnJobsSelect.schema';
import { QuestionsOnJobsIncludeObjectSchema } from './objects/QuestionsOnJobsInclude.schema';
import { QuestionsOnJobsUpdateInputObjectSchema } from './objects/QuestionsOnJobsUpdateInput.schema';
import { QuestionsOnJobsUncheckedUpdateInputObjectSchema } from './objects/QuestionsOnJobsUncheckedUpdateInput.schema';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './objects/QuestionsOnJobsWhereUniqueInput.schema';

export const QuestionsOnJobsUpdateOneSchema = z.object({ select: QuestionsOnJobsSelectObjectSchema.optional(), include: QuestionsOnJobsIncludeObjectSchema.optional(), data: z.union([QuestionsOnJobsUpdateInputObjectSchema, QuestionsOnJobsUncheckedUpdateInputObjectSchema]), where: QuestionsOnJobsWhereUniqueInputObjectSchema  })