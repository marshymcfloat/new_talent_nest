import { z } from 'zod';
import { ResumeSelectObjectSchema } from './objects/ResumeSelect.schema';
import { ResumeIncludeObjectSchema } from './objects/ResumeInclude.schema';
import { ResumeCreateInputObjectSchema } from './objects/ResumeCreateInput.schema';
import { ResumeUncheckedCreateInputObjectSchema } from './objects/ResumeUncheckedCreateInput.schema';

export const ResumeCreateOneSchema = z.object({ select: ResumeSelectObjectSchema.optional(), include: ResumeIncludeObjectSchema.optional(), data: z.union([ResumeCreateInputObjectSchema, ResumeUncheckedCreateInputObjectSchema])  })