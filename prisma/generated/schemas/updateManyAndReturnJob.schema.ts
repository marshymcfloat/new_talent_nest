import { z } from 'zod';
import { JobSelectObjectSchema } from './objects/JobSelect.schema';
import { JobUpdateManyMutationInputObjectSchema } from './objects/JobUpdateManyMutationInput.schema';
import { JobWhereInputObjectSchema } from './objects/JobWhereInput.schema';

export const JobUpdateManyAndReturnSchema = z.object({ select: JobSelectObjectSchema.optional(), data: JobUpdateManyMutationInputObjectSchema, where: JobWhereInputObjectSchema.optional()  }).strict()