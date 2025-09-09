import { z } from 'zod';
import { QuestionsOnJobsWhereInputObjectSchema } from './objects/QuestionsOnJobsWhereInput.schema';

export const QuestionsOnJobsDeleteManySchema = z.object({ where: QuestionsOnJobsWhereInputObjectSchema.optional()  })