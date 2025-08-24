import { z } from 'zod';
import { JobApplicationSelectObjectSchema } from './objects/JobApplicationSelect.schema';
import { JobApplicationIncludeObjectSchema } from './objects/JobApplicationInclude.schema';
import { JobApplicationCreateInputObjectSchema } from './objects/JobApplicationCreateInput.schema';
import { JobApplicationUncheckedCreateInputObjectSchema } from './objects/JobApplicationUncheckedCreateInput.schema';

export const JobApplicationCreateOneSchema = z.object({ select: JobApplicationSelectObjectSchema.optional(), include: JobApplicationIncludeObjectSchema.optional(), data: z.union([JobApplicationCreateInputObjectSchema, JobApplicationUncheckedCreateInputObjectSchema])  })