import { z } from 'zod';
import { JobApplicationSelectObjectSchema } from './objects/JobApplicationSelect.schema';
import { JobApplicationIncludeObjectSchema } from './objects/JobApplicationInclude.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './objects/JobApplicationWhereUniqueInput.schema';

export const JobApplicationDeleteOneSchema = z.object({ select: JobApplicationSelectObjectSchema.optional(), include: JobApplicationIncludeObjectSchema.optional(), where: JobApplicationWhereUniqueInputObjectSchema  })