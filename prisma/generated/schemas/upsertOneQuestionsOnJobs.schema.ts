import { z } from 'zod';
import { QuestionsOnJobsSelectObjectSchema } from './objects/QuestionsOnJobsSelect.schema';
import { QuestionsOnJobsIncludeObjectSchema } from './objects/QuestionsOnJobsInclude.schema';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './objects/QuestionsOnJobsWhereUniqueInput.schema';
import { QuestionsOnJobsCreateInputObjectSchema } from './objects/QuestionsOnJobsCreateInput.schema';
import { QuestionsOnJobsUncheckedCreateInputObjectSchema } from './objects/QuestionsOnJobsUncheckedCreateInput.schema';
import { QuestionsOnJobsUpdateInputObjectSchema } from './objects/QuestionsOnJobsUpdateInput.schema';
import { QuestionsOnJobsUncheckedUpdateInputObjectSchema } from './objects/QuestionsOnJobsUncheckedUpdateInput.schema';

export const QuestionsOnJobsUpsertSchema = z.object({ select: QuestionsOnJobsSelectObjectSchema.optional(), include: QuestionsOnJobsIncludeObjectSchema.optional(), where: QuestionsOnJobsWhereUniqueInputObjectSchema, create: z.union([ QuestionsOnJobsCreateInputObjectSchema, QuestionsOnJobsUncheckedCreateInputObjectSchema ]), update: z.union([ QuestionsOnJobsUpdateInputObjectSchema, QuestionsOnJobsUncheckedUpdateInputObjectSchema ])  })