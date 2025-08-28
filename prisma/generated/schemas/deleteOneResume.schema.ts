import { z } from 'zod';
import { ResumeSelectObjectSchema } from './objects/ResumeSelect.schema';
import { ResumeIncludeObjectSchema } from './objects/ResumeInclude.schema';
import { ResumeWhereUniqueInputObjectSchema } from './objects/ResumeWhereUniqueInput.schema';

export const ResumeDeleteOneSchema = z.object({ select: ResumeSelectObjectSchema.optional(), include: ResumeIncludeObjectSchema.optional(), where: ResumeWhereUniqueInputObjectSchema  })