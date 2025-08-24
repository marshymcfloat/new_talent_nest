import { z } from 'zod';
import { JobApplicationUpdateManyMutationInputObjectSchema } from './objects/JobApplicationUpdateManyMutationInput.schema';
import { JobApplicationWhereInputObjectSchema } from './objects/JobApplicationWhereInput.schema';

export const JobApplicationUpdateManySchema = z.object({ data: JobApplicationUpdateManyMutationInputObjectSchema, where: JobApplicationWhereInputObjectSchema.optional()  })