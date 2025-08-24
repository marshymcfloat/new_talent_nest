import { z } from 'zod';
import { JobApplicationWhereInputObjectSchema } from './objects/JobApplicationWhereInput.schema';

export const JobApplicationDeleteManySchema = z.object({ where: JobApplicationWhereInputObjectSchema.optional()  })