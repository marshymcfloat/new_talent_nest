import { z } from 'zod';
import { ResumeUpdateManyMutationInputObjectSchema } from './objects/ResumeUpdateManyMutationInput.schema';
import { ResumeWhereInputObjectSchema } from './objects/ResumeWhereInput.schema';

export const ResumeUpdateManySchema = z.object({ data: ResumeUpdateManyMutationInputObjectSchema, where: ResumeWhereInputObjectSchema.optional()  })