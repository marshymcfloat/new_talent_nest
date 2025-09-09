import { z } from 'zod';
import { QuestionsOnJobsSelectObjectSchema } from './objects/QuestionsOnJobsSelect.schema';
import { QuestionsOnJobsIncludeObjectSchema } from './objects/QuestionsOnJobsInclude.schema';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './objects/QuestionsOnJobsWhereUniqueInput.schema';

export const QuestionsOnJobsFindUniqueOrThrowSchema = z.object({ select: QuestionsOnJobsSelectObjectSchema.optional(), include: QuestionsOnJobsIncludeObjectSchema.optional(), where: QuestionsOnJobsWhereUniqueInputObjectSchema })