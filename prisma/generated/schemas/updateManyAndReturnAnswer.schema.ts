import { z } from 'zod';
import { AnswerSelectObjectSchema } from './objects/AnswerSelect.schema';
import { AnswerUpdateManyMutationInputObjectSchema } from './objects/AnswerUpdateManyMutationInput.schema';
import { AnswerWhereInputObjectSchema } from './objects/AnswerWhereInput.schema';

export const AnswerUpdateManyAndReturnSchema = z.object({ select: AnswerSelectObjectSchema.optional(), data: AnswerUpdateManyMutationInputObjectSchema, where: AnswerWhereInputObjectSchema.optional()  }).strict()