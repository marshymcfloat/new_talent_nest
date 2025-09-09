import { z } from 'zod';
import { QuestionsOnJobsCreateManyInputObjectSchema } from './objects/QuestionsOnJobsCreateManyInput.schema';

export const QuestionsOnJobsCreateManySchema = z.object({ data: z.union([ QuestionsOnJobsCreateManyInputObjectSchema, z.array(QuestionsOnJobsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })