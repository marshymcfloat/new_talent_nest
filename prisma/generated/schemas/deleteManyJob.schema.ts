import { z } from 'zod';
import { JobWhereInputObjectSchema } from './objects/JobWhereInput.schema';

export const JobDeleteManySchema = z.object({ where: JobWhereInputObjectSchema.optional()  })