import { z } from 'zod';
import { QuestionsOnJobsSelectObjectSchema } from './objects/QuestionsOnJobsSelect.schema';
import { QuestionsOnJobsUpdateManyMutationInputObjectSchema } from './objects/QuestionsOnJobsUpdateManyMutationInput.schema';
import { QuestionsOnJobsWhereInputObjectSchema } from './objects/QuestionsOnJobsWhereInput.schema';

export const QuestionsOnJobsUpdateManyAndReturnSchema = z.object({ select: QuestionsOnJobsSelectObjectSchema.optional(), data: QuestionsOnJobsUpdateManyMutationInputObjectSchema, where: QuestionsOnJobsWhereInputObjectSchema.optional()  }).strict()