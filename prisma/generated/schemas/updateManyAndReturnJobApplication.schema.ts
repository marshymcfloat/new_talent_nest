import { z } from 'zod';
import { JobApplicationSelectObjectSchema } from './objects/JobApplicationSelect.schema';
import { JobApplicationUpdateManyMutationInputObjectSchema } from './objects/JobApplicationUpdateManyMutationInput.schema';
import { JobApplicationWhereInputObjectSchema } from './objects/JobApplicationWhereInput.schema';

export const JobApplicationUpdateManyAndReturnSchema = z.object({ select: JobApplicationSelectObjectSchema.optional(), data: JobApplicationUpdateManyMutationInputObjectSchema, where: JobApplicationWhereInputObjectSchema.optional()  }).strict()