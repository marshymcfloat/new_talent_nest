import { z } from 'zod';
import { ResumeWhereInputObjectSchema } from './objects/ResumeWhereInput.schema';

export const ResumeDeleteManySchema = z.object({ where: ResumeWhereInputObjectSchema.optional()  })