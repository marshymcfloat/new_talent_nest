import { z } from 'zod';
import { QuestionsOnJobsUpdateManyMutationInputObjectSchema } from './objects/QuestionsOnJobsUpdateManyMutationInput.schema';
import { QuestionsOnJobsWhereInputObjectSchema } from './objects/QuestionsOnJobsWhereInput.schema';

export const QuestionsOnJobsUpdateManySchema = z.object({ data: QuestionsOnJobsUpdateManyMutationInputObjectSchema, where: QuestionsOnJobsWhereInputObjectSchema.optional()  })