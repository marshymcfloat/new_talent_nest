import { z } from 'zod';
import { AnswerSelectObjectSchema } from './objects/AnswerSelect.schema';
import { AnswerCreateManyInputObjectSchema } from './objects/AnswerCreateManyInput.schema';

export const AnswerCreateManyAndReturnSchema = z.object({ select: AnswerSelectObjectSchema.optional(), data: z.union([ AnswerCreateManyInputObjectSchema, z.array(AnswerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()