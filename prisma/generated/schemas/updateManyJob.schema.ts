import { z } from 'zod';
import { JobUpdateManyMutationInputObjectSchema } from './objects/JobUpdateManyMutationInput.schema';
import { JobWhereInputObjectSchema } from './objects/JobWhereInput.schema';

export const JobUpdateManySchema = z.object({ data: JobUpdateManyMutationInputObjectSchema, where: JobWhereInputObjectSchema.optional()  })