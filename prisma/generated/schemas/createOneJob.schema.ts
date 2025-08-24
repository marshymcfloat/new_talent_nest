import { z } from 'zod';
import { JobSelectObjectSchema } from './objects/JobSelect.schema';
import { JobIncludeObjectSchema } from './objects/JobInclude.schema';
import { JobCreateInputObjectSchema } from './objects/JobCreateInput.schema';
import { JobUncheckedCreateInputObjectSchema } from './objects/JobUncheckedCreateInput.schema';

export const JobCreateOneSchema = z.object({ select: JobSelectObjectSchema.optional(), include: JobIncludeObjectSchema.optional(), data: z.union([JobCreateInputObjectSchema, JobUncheckedCreateInputObjectSchema])  })