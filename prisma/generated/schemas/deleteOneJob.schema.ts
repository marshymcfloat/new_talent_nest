import { z } from 'zod';
import { JobSelectObjectSchema } from './objects/JobSelect.schema';
import { JobIncludeObjectSchema } from './objects/JobInclude.schema';
import { JobWhereUniqueInputObjectSchema } from './objects/JobWhereUniqueInput.schema';

export const JobDeleteOneSchema = z.object({ select: JobSelectObjectSchema.optional(), include: JobIncludeObjectSchema.optional(), where: JobWhereUniqueInputObjectSchema  })