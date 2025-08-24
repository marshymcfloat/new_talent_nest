import { z } from 'zod';
import { JobApplicationSelectObjectSchema } from './objects/JobApplicationSelect.schema';
import { JobApplicationIncludeObjectSchema } from './objects/JobApplicationInclude.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './objects/JobApplicationWhereUniqueInput.schema';
import { JobApplicationCreateInputObjectSchema } from './objects/JobApplicationCreateInput.schema';
import { JobApplicationUncheckedCreateInputObjectSchema } from './objects/JobApplicationUncheckedCreateInput.schema';
import { JobApplicationUpdateInputObjectSchema } from './objects/JobApplicationUpdateInput.schema';
import { JobApplicationUncheckedUpdateInputObjectSchema } from './objects/JobApplicationUncheckedUpdateInput.schema';

export const JobApplicationUpsertSchema = z.object({ select: JobApplicationSelectObjectSchema.optional(), include: JobApplicationIncludeObjectSchema.optional(), where: JobApplicationWhereUniqueInputObjectSchema, create: z.union([ JobApplicationCreateInputObjectSchema, JobApplicationUncheckedCreateInputObjectSchema ]), update: z.union([ JobApplicationUpdateInputObjectSchema, JobApplicationUncheckedUpdateInputObjectSchema ])  })