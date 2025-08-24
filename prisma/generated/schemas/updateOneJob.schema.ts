import { z } from 'zod';
import { JobSelectObjectSchema } from './objects/JobSelect.schema';
import { JobIncludeObjectSchema } from './objects/JobInclude.schema';
import { JobUpdateInputObjectSchema } from './objects/JobUpdateInput.schema';
import { JobUncheckedUpdateInputObjectSchema } from './objects/JobUncheckedUpdateInput.schema';
import { JobWhereUniqueInputObjectSchema } from './objects/JobWhereUniqueInput.schema';

export const JobUpdateOneSchema = z.object({ select: JobSelectObjectSchema.optional(), include: JobIncludeObjectSchema.optional(), data: z.union([JobUpdateInputObjectSchema, JobUncheckedUpdateInputObjectSchema]), where: JobWhereUniqueInputObjectSchema  })