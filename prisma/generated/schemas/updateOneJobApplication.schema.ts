import { z } from 'zod';
import { JobApplicationSelectObjectSchema } from './objects/JobApplicationSelect.schema';
import { JobApplicationIncludeObjectSchema } from './objects/JobApplicationInclude.schema';
import { JobApplicationUpdateInputObjectSchema } from './objects/JobApplicationUpdateInput.schema';
import { JobApplicationUncheckedUpdateInputObjectSchema } from './objects/JobApplicationUncheckedUpdateInput.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './objects/JobApplicationWhereUniqueInput.schema';

export const JobApplicationUpdateOneSchema = z.object({ select: JobApplicationSelectObjectSchema.optional(), include: JobApplicationIncludeObjectSchema.optional(), data: z.union([JobApplicationUpdateInputObjectSchema, JobApplicationUncheckedUpdateInputObjectSchema]), where: JobApplicationWhereUniqueInputObjectSchema  })