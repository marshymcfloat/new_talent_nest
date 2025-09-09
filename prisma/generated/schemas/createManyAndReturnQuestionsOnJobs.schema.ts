import { z } from 'zod';
import { QuestionsOnJobsSelectObjectSchema } from './objects/QuestionsOnJobsSelect.schema';
import { QuestionsOnJobsCreateManyInputObjectSchema } from './objects/QuestionsOnJobsCreateManyInput.schema';

export const QuestionsOnJobsCreateManyAndReturnSchema = z.object({ select: QuestionsOnJobsSelectObjectSchema.optional(), data: z.union([ QuestionsOnJobsCreateManyInputObjectSchema, z.array(QuestionsOnJobsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()