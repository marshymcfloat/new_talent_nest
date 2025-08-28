import { z } from 'zod';
import { ResumeSelectObjectSchema } from './objects/ResumeSelect.schema';
import { ResumeUpdateManyMutationInputObjectSchema } from './objects/ResumeUpdateManyMutationInput.schema';
import { ResumeWhereInputObjectSchema } from './objects/ResumeWhereInput.schema';

export const ResumeUpdateManyAndReturnSchema = z.object({ select: ResumeSelectObjectSchema.optional(), data: ResumeUpdateManyMutationInputObjectSchema, where: ResumeWhereInputObjectSchema.optional()  }).strict()